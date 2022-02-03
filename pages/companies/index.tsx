import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MailIcon, PhoneIcon, SearchIcon } from "@heroicons/react/solid";

import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Navigation from "../../components/Navigation";

const Home: NextPage = (props:any) => {
  // @ts-ignore
  const { companies } = props;

  return (
    <>
      <Navigation />

      <ul className="container max-w-7xl mt-10 mx-auto px-2 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
        {companies?.map((company: any) => (
          <div
            key={company.id}
            className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 "
          >
            <li
              key={company.name}
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
                      {/* <span className="inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {company.region?.name}
                      </span> */}
                    </div>
                    {/* <p className="mt-1 text-gray-500 text-sm truncate">
                      {company.title}
                    </p> */}
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
  try {
    const { data } = await client.query({
      query: gql`
        query comapnies($orderBy: [CompanyOrderByInput!]) {
          companies(orderBy: $orderBy) {
            id
            companyName
            logo
          }
        }
      `,
      variables: {
        orderBy: {
          companyName: "asc",
        },
      },
    });
    return {
      props: {
        companies: data.companies,
      },
    };
  } catch (error) {
    return {
      props: {
        regions: [],
      },
    };
  }
}

export default Home;
