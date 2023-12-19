import { createClient } from "contentful";
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
  };
}

export const retrievedData = getData();

retrievedData.then((val) => {
  console.log(val);
});

function getSiteSections(some) {
  let sections = some;
  console.log(sections);
  return sections;
}

getData().then((val) => {
  getSiteSections(val);
});
