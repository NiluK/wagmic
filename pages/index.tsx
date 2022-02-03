import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MailIcon, PhoneIcon, SearchIcon } from "@heroicons/react/solid";

import { gql } from "@apollo/client";
import client from "../apollo-client";
import Navigation from "../components/Navigation";

const Home: NextPage = (props:any) => {
  // @ts-ignore
  const { companies } = props;

  return (
    <>
      <Navigation />
      <div>
        {/* Hero card */}
        <div className="mt-3 relative">
          <div className="w-full mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://stockhead.com.au/wp-content/uploads/2019/11/antler-1.jpg"
                />
                <div className="absolute inset-0 bg-[#ED4747] mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    The most comprehensive <br /> Antler database
                  </span>
                </h1>
                {/* <div className="mt-1 mx-auto max-w-xl relative rounded-md shadow-sm">
                  <div
                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <SearchIcon
                      className="mr-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      width="40"
                      height="40"
                    />
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="focus:ring-red-500 focus:border-red-500 block w-full pl-12 sm:text-xl border-gray-300 rounded-md p-4 mt-10"
                    placeholder="Search"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="container max-w-7xl mt-10 mx-auto px-2 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
        {companies.map((company: any) => (
          <div
            key={company.id}
            className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 "
          >
            <li
              key={company.email}
              className={` grid col-span-3 grid-rows-3 rounded-lg shadow divide-y divide-gray-200`}
              // style={{ outlineColor: company.brandColor, outlineWidth: "2px", outlineStyle: "solid" }}
            >
              <Link passHref href={`/companies/${company.companyName}`}>
                <div className="w-full flex row-span-3   items-center justify-between p-6 space-x-6">
                  <div className="items-center">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate overflow-ellipsis max-w-[100px] sm:mx-w-full">
                        {company.companyName}
                      </h3>
                      <span className="inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {company.cohort?.name}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">
                      {company.title}
                    </p>
                  </div>
                  <img
                    className="w-auto mx-auto max-w-[120px] max-h-[60px] flex-shrink-0"
                    src={company.logo}
                    alt=""
                  />
                </div>
                {/* <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <a
                      href={`mailto:${company.email}`}
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <MailIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Email</span>
                    </a>
                  </div>
                  <div className="-ml-px w-0 flex-1 flex">
                    <a
                      href={`tel:${company.telephone}`}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <PhoneIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Call</span>
                    </a>
                  </div>
                </div>
              </div> */}
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query companies {
        companies(take:10) {
          id
          companyName
          logo
          cohort {
            name
          }
          brandColor
        }
      }
    `,
  });

  return {
    props: {
      companies: data.companies,
    },
  };
}

export default Home;
