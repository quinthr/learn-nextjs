import getStaticParams from "../page";
import { delay } from "../../../../lib/delay";

const getData = async (slug: string) => {
  const post = await delay(5000);
  return post;
};

export default async function BlogPost({ params }) {
  const { slug } = params;
  console.log(params);
  const post = await getData(slug);
  throw new Error("yikes");
  return <div>{post.slug}</div>;
}
