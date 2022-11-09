import React from "react";

interface Content {
  title: string;
  description: string;
  href: string;
  button: string;
  [key: string]: any;
}

type prop = {
  content: Content;
};

const ContentSection = ({ content }: prop) => {
  return (
    <>
      <section
        aria-labelledby="social-impact-heading"
        className="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={content?.imageUrl}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2
                id="social-impact-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                <span className="block sm:inline">{content?.title}</span>
              </h2>
              <p className="mt-3 text-xl text-white">{content?.description}</p>
              <a
                href={content?.href}
                className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                {content?.button}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSection;
