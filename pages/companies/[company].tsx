/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon,
} from "@heroicons/react/solid";

import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Navigation from "../../components/Navigation";
import Link from "next/link";

const user = {
  name: "Whitney Francis",
  email: "whitney@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};

const navigation = [
  { name: "Companies", href: "/companies" },
  { name: "Cohorts", href: "/cohorts" },
  { name: "Regions", href: "/regions" },
];
const attachments = [
  { name: "resume_front_end_developer.pdf", href: "#" },
  { name: "coverletter_front_end_developer.pdf", href: "#" },
];
const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: "bg-gray-400" },
  advanced: { icon: ThumbUpIcon, bgColorClass: "bg-blue-500" },
  completed: { icon: CheckIcon, bgColorClass: "bg-green-500" },
};
const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    content: "Applied to",
    target: "Front End Developer",
    date: "Sep 20",
    datetime: "2020-09-20",
  },
  {
    id: 2,
    type: eventTypes.advanced,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    date: "Sep 22",
    datetime: "2020-09-22",
  },
  {
    id: 3,
    type: eventTypes.completed,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    date: "Sep 28",
    datetime: "2020-09-28",
  },
  {
    id: 4,
    type: eventTypes.advanced,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    date: "Sep 30",
    datetime: "2020-09-30",
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: "Completed interview with",
    target: "Katherine Snyder",
    date: "Oct 4",
    datetime: "2020-10-04",
  },
];
const comments = [
  {
    id: 1,
    name: "Leslie Alexander",
    date: "4d ago",
    imageId: "1494790108377-be9c29b29330",
    body: "Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.",
  },
  {
    id: 2,
    name: "Michael Foster",
    date: "4d ago",
    imageId: "1519244703995-f4e0f30006d5",
    body: "Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.",
  },
  {
    id: 3,
    name: "Dries Vincent",
    date: "4d ago",
    imageId: "1506794778202-cad84cf45f1d",
    body: "Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.",
  },
];


export default function Example(props:any) {
  const { company } = props;
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navigation />
      <main className="py-10">
        {/* Page header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <img className="max-w-[100px] m-2" src={company?.logo} alt="" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {company?.companyName}
              </h1>
              <p className="text-sm font-medium text-gray-500">
                {company?.tagline}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
              <a href={`mailto:${company?.email}`}>Email</a>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
              <a href={`${company?.website}`}>Website</a>
            </button>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2">
            {/* Description list*/}
            <section aria-labelledby="applicant-information-title">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Status
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {!company?.writtenOff ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Dead
                          </span>
                        )}
                      </dd>
                    </div>
                    {/* <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Location
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {company?.location}
                      </dd>
                    </div> */}
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Region
                      </dt>
                      <Link href={`/regions/${company?.region?.name}`}>
                        <dd className="mt-1 text-sm text-gray-900">
                          {company?.region?.name}
                        </dd>
                      </Link>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Cohort
                      </dt>
                      <Link href={`/cohorts/${company?.cohort?.name}`}>
                        <dd className="mt-1 text-sm text-gray-900">
                          {company?.cohort?.name}
                        </dd>
                      </Link>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Sector
                      </dt>
                      <Link href={`/sectors/${company?.sector?.[0]?.name}`}>
                        <dd className="mt-1 text-sm text-gray-900">
                          {company?.sector?.[0]?.name}
                        </dd>
                      </Link>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">
                        About
                      </dt>
                      <p className="my-2 text-sm text-gray-900">
                        {company?.description}
                      </p>
                      <p className="my-2 text-sm text-gray-900">
                        {company?.summary}
                      </p>
                      <p className="my-2 text-sm text-gray-900">
                        {company?.elevatorPitch}
                      </p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: company?.innovation,
                        }}
                        className="my-2 text-sm text-gray-900"
                      />
                      {company?.traction && (
                        <>
                          <dt className="text-sm mt-8 font-medium text-gray-500">
                            Traction
                          </dt>
                          <p className="my-2 text-sm text-gray-900">
                            {company?.traction}
                          </p>
                        </>
                      )}
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>
          <section aria-labelledby="notes-title">
            <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="px-4 py-6 sm:px-6">
                  <ul className="space-y-8">
                    {company?.teamMembers?.map((member:any) => (
                      <li key={member.id}>
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={member.profilePhoto}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-sm">
                              <a href="#" className="font-medium text-gray-900">
                                {member.firstName} {member.lastName}
                              </a>
                              <a
                                href={member.linkedin}
                                className="font-medium text-gray-900"
                              >
                                <svg
                                  role="img"
                                  viewBox="0 0 24 24"
                                  className="w-5 h-5 ml-3 inline-flex fill-[#0A66C2]"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>LinkedIn</title>
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                              </a>
                            </div>
                            <div className="mt-1 text-sm text-gray-700">
                              <p>{member.body}</p>
                            </div>
                            <div className="mt-2 text-sm space-x-2">
                              <span className="text-gray-500 font-medium">
                                {member.date}
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(props:any) {
  const { data } = await client.query({
    query: gql`
      query company($where: CompanyWhereInput!) {
        companies(where: $where) {
          id
          companyName
          logo
          tagline
          email
          summary
          website
          elevatorPitch
          location
          region {
            name
          }
          description
          cohort {
            name
          }
          sector {
            name
          }
          writtenOff
          brandColor
          traction
          innovation
          teamMembers {
            id
            # name
            firstName
            lastName
            profilePhoto
            linkedin
          }
        }
      }
    `,
    variables: {
      where: {
        companyName: {
          startsWith: props?.params?.company,
          mode: "insensitive",
        },
      },
    },
  });
  return {
    props: {
      company: data.companies[0],
    },
  };
}
