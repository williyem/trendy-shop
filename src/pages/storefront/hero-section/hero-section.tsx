import { settings } from "../../../helpers/ui-data";
import Slider from "react-slick";
const heroImg = require("../../../assets/images/hero.jpg");
const heroImg2 = require("../../../assets/images/feature3.jpg");
const heroImg3 = require("../../../assets/images/feature2.jpg");

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="max-w-full">
        <Slider {...settings}>
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src={heroImg}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-60"
            />

            {/* Navigation */}

            <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                New arrivals are here
              </h1>
              <p className="mt-4 text-xl text-white">
                The new arrivals have, well, newly arrived. Check out the latest
                options from our summer small-batch release while they're still
                in stock.
              </p>
              <a
                href="/products"
                className="mt-8 inline-block bg-secondaryPink border-[2px] border-white py-3 px-16 text-2xl font-medium text-white hover:bg-gray-100 hover:text-mainPink"
              >
                SHOP
              </a>
            </div>
          </div>
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src={heroImg2}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-60"
            />

            {/* Navigation */}

            <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                New arrivals are here
              </h1>
              <p className="mt-4 text-xl text-white">
                The new arrivals have, well, newly arrived. Check out the latest
                options from our summer small-batch release while they're still
                in stock.
              </p>
              <a
                href="/products"
                className="mt-8 inline-block bg-secondaryPink border-[2px] border-white py-3 px-16 text-2xl font-medium text-white hover:bg-gray-100 hover:text-mainPink"
              >
                SHOP
              </a>
            </div>
          </div>
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src={heroImg3}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-60"
            />

            {/* Navigation */}

            <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                New arrivals are here
              </h1>
              <p className="mt-4 text-xl text-white">
                The new arrivals have, well, newly arrived. Check out the latest
                options from our summer small-batch release while they're still
                in stock.
              </p>
              <a
                href="/products"
                className="mt-8 inline-block bg-secondaryPink border-[2px] border-white py-3 px-16 text-2xl font-medium text-white hover:bg-gray-100 hover:text-mainPink"
              >
                SHOP
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HeroSection;
