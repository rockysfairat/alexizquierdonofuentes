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
    <article className="w-screen relative [&>section]:px-5 [&>section]:py-24 flex flex-col">
      {/* Fake <header> goes here: */}
      {content &&
        content.props.siteSections
          .filter((val) => val.fields.headline == "Àlex Izquierdo Nofuentes")
          .map((val) => (
            <section
              id={val.fields.headline}
              key={val.fields.headline}
              className="min-h-screen flex flex-col bg-[#fff] text-primary font-rajdhani relative overflow-hidden"
            >
              <div className="text-lg lg:text-3xl flex flex-col items-start w-3/4">
                <h1 className="text-3xl lg:text-5xl">{val.fields.headline}</h1>
                {documentToReactComponents(val.fields.sectionText)}
              </div>

              {val.fields.bgPicture && (
                <Image
                  src={"http:" + `${val.fields.bgPicture.fields.file.url}`}
                  width="350"
                  height="350"
                  alt={val.fields.bgPicture.description}
                  className="relative"
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
              className="min-h-screen flex flex-col bg-light text-primary font-rajdhani relative overflow-hidden"
              // Tailwind is very bad with reactivity, so below I decided to BRUTEFORCE css-order property:
              style={{ order: `${val.fields.order}` }}
            >
              <div className="text-lg lg:text-3xl flex flex-col items-start w-3/4">
                <h2 className="text-3xl lg:text-5xl">{val.fields.headline}</h2>
                {documentToReactComponents(val.fields.sectionText)}
              </div>

              <figure className="w-1/3 block rounded-lg rotate-12  absolute top-11 lg:top-36 right-0 lg:right-9 ">
                {val.fields.bgPicture && (
                  <span className="bg-primary w-fit ">
                    <Image
                      src={"http:" + `${val.fields.bgPicture.fields.file.url}`}
                      width="350"
                      height="350"
                      alt={val.fields.bgPicture.description}
                      className="relative rounded-lg lg:opacity-50 opacity-40"
                    />
                  </span>
                )}
              </figure>
            </section>
          ))}
    </article>
  );
}
