import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";

type Props = {
  leftText: any;
  imageUrl: any;
  rightText: any;
  extraLeftText?: any;
  moreHidden?: any;
  maxWidth?: any;
  id: any;
};

const Section = ({
  leftText,
  imageUrl,
  rightText,
  extraLeftText,
  moreHidden,
  maxWidth = "300px",
  id,
}: Props) => {
  return (
    <div className="max-w-lg lg:max-w-3xl my-5 px-6 lg:relative lg:px-8 mx-auto">
      <h2 className="text-3xl py-5 lg:max-w-[250px] lg:right-[600px] lg:absolute lg:top-[-70px] font-extrabold text-white lg:text-4xl ">
        {leftText}
        <span className="block lg:my-4">{extraLeftText}</span>
      </h2>
      <Image
        className={`transform rounded-lg object-cover object-left-top mx-auto max-h-[400px] lg:max-h-[600px]`}
        src={imageUrl}
        alt="App screenshot"
      />
      <h2 className="text-3xl my-5 lg:left-[100px] lg:bottom-[200px] font-extrabold text-white lg:text-4xl relative flex lg:items-end lg:justify-end h-100">
        <span className="block lg:max-w-[250px]">
          {rightText}
          {!moreHidden && (
            <Link to={`#${id}`} smooth={true}>
              <a className="block text-lg items-center font-bold my-3 py-2 border border-transparent rounded-full shadow-sm text-pink-600 hover:underline hover:text-pink-700 cursor-pointer">
                More
              </a>
            </Link>
          )}
        </span>
      </h2>
    </div>
  );
};

export default Section;
