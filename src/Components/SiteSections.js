"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export async function getData() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "siteSection" });
  console.log(res);
  return {
    props: {
      siteSections: res.items,
    },
    revalidate: 1,
  };
}

const data = getData();

export default function SiteSections({ siteSections }) {
  let [content, setContent] = useState();
  useEffect(() => {
    data.then((values) => setContent(values));
  }, []);
  console.log(content);
  return (
    <article className="w-screen relative flex flex-col leading-5">
      {/* Fake <header> goes here: */}
      {content &&
        content.props.siteSections
          .filter((val) => val.fields.headline == "Àlex Izquierdo Nofuentes")
          .map((val) => (
            <section
              id={val.fields.headline}
              key={val.fields.headline}
              className="lg:h-screen h-min flex flex-col lg:flex-row justify-evenly px-5 pt-7 lg:pt-0 lg:px-0 pb-36 bg-[#fff] text-primary font-rajdhani relative lopsidedScreen:flex-row  lopsidedScreen:pt-9 lopsidedScreen:h-screen"
            >
              <div className="text-lg xl:text-3xl flex flex-col items-start justify-center w-full lg:w-[60%] pb-3 lg:pb-0 lopsidedScreen:pr-4">
                <h1 className="text-3xl lg:text-7xl">{val.fields.headline}</h1>
                <div className="pt-0 lg:pt-9 lopsidedScreen:text-md">
                  {documentToReactComponents(val.fields.sectionText)}
                </div>
              </div>

              {val.fields.bgPicture && (
                <Image
                  src={"http:" + `${val.fields.bgPicture.fields.file.url}`}
                  width="800"
                  height="800"
                  alt={val.fields.bgPicture.description}
                  className="w-full lg:w-[30%] lopsidedScreen:w-[20%] relative rounded-lg object-cover shadow-md"
                />
              )}
            </section>
          ))}
      {/* Rest of the content with different CSS: */}
      {content &&
        content.props.siteSections
          .filter((val) => val.fields.headline != "Àlex Izquierdo Nofuentes")
          .map((val) => (
            <section
              id={val.fields.headline}
              key={val.fields.headline}
              className="min-h-screen flex flex-col bg-light text-primary font-rajdhani relative overflow-hidden px-5 py-24"
              // Tailwind is very bad with reactivity, so below I decided to BRUTEFORCE css-order property:
              style={{ order: `${val.fields.order}` }}
            >
              <div className="text-lg lg:text-3xl flex flex-col items-start w-2/3">
                <h2 className="text-3xl lg:text-5xl pb-7">
                  {val.fields.headline}
                </h2>
                {documentToReactComponents(val.fields.sectionText)}
              </div>

              <figure className="w-[250px] lg:w-1/3 min-h-fit rounded-lg flex justify-center absolute top-[200px] right-[-80px] lg:right-[-150px]">
                {val.fields.bgPicture && (
                  <span className="bg-primary/5 rotate-12 w-fit h-fit rounded-lg relative">
                    <Image
                      src={"http:" + `${val.fields.bgPicture.fields.file.url}`}
                      width="500"
                      height="500"
                      alt={val.fields.bgPicture.description}
                      className="relative rounded-lg lg:opacity-10 opacity-5"
                    />
                  </span>
                )}
              </figure>
            </section>
          ))}
    </article>
  );
}
