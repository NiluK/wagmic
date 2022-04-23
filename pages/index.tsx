import NewsletterSubscribe from "../components/NewsLetterSubscribe";
import Sections from "../components/sections";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  return (
    <div className="relative bg-zinc-900 ">
      <div className="max-w-xl  md:max-w-3xl lg:max-w-4xl mx-auto py-16 ">
        <div className="bg-zinc-900 rounded-lg -xl sm:grid sm:grid-cols-2 lg:gap-1">
          <div className="pt-10 pb-12 px-5 md:py-20 col-span-1 ">
            <div className="text-center relative md:text-left ">
              <h1>
                <span className="mt-1 block text-5xl tracking-tight font-extrabold md:text-7xl">
                  <span className="block text-pink-600">
                    <span className="font-logo relative top-[-7px] pr-3">
                      E
                    </span>{" "}
                    Enchanta
                  </span>
                </span>
              </h1>
              <h1>
                <span className="mt-1 block w-full text-2xl tracking-tight font-extrabold lg:text-4xl xl:text-4xl">
                  <span className="block text-white">
                    Discover NFTs you love.
                  </span>
                </span>
              </h1>

              <div className="mt-8 mx-auto text-center md:text-left  lg:mx-0">
                <form action="#" method="POST" className="mt-3 mx-auto lg:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <Link
                    to="#contact"
                    type="submit"
                    smooth={true}
                    className="block mx-auto md:mx-0 px-5 rounded-lg border border-transparent py-3 bg-pink-600 text-base font-medium text-white  hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 lg:px-10 cursor-pointer"
                  >
                    Get early access
                  </Link>
                </form>
              </div>
            </div>
          </div>
          <div className="-mt-6  lg:aspect-w-2  lg:max-w-lg: ">
            <img
              className="transform mt-10 max-h-[400px] lg:max-h-[600px] px-10 mx-auto"
              src="https://i.imgur.com/g9NpKnz.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
      <Sections
        leftText="Swipe what you like."
        rightText="Add to wishlist."
        imageUrl="https://i.imgur.com/RJCoPqp.png"
        moreHidden={true}
        maxWidth={"650px"}
        id="contact"
      />
      <Sections
        leftText="Set your budget."
        rightText="Get alerts on price moves."
        imageUrl="https://i.imgur.com/LhKmWeq.png"
        id="contact"
        maxWidth={"650px"}
      />
      <Sections
        leftText="Discover what's trending."
        rightText="Build your dream collections."
        imageUrl="https://i.imgur.com/7viRuUR.png"
        id="contact"
      />
      <Sections
        leftText="Discover & follow cool new NFT creators."
        rightText="See what your connections buy & sell."
        imageUrl="https://i.imgur.com/jrI6vVr.png"
        id="contact"
      />
      <Sections
        leftText="Love a collection?"
        extraLeftText="Make a video pitching it to others."
        rightText="Be rewarded for writing helpful reviews."
        imageUrl="https://i.imgur.com/4OU7fep.png"
        id="contact"
      />
      <Sections
        leftText="Get access to exclusive membership benefits."
        rightText="Be rewarded for being you."
        imageUrl="https://i.imgur.com/1opR3rI.png"
        id="contact"
      />
      {/* CTA section */}
      <NewsletterSubscribe />
    </div>
  );
};

export default Home;
