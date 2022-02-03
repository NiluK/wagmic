import React from "react";
import Link from "next/link";
export default function Navigation() {
  const navigation = [
    { name: "Companies", href: "/companies" },
    { name: "Cohorts", href: "/cohorts" },
    { name: "Regions", href: "/regions" },
    { name: "Sectors", href: "/sectors" },
  ];
  return (
    <header className="text-[#ED4747] bg-white sticky top-0 w-full z-10  border-b-2">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link passHref href="/">
              <a>
                <span className="sr-only">Antler DB</span>
                <img
                  className="h-10 w-auto"
                  src="https://cdn-images-1.medium.com/max/1200/1*klqZhlKJ4bolRA-Kaanf-Q.png"
                  alt=""
                />
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium  hover:text-blue-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-flex-start space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
