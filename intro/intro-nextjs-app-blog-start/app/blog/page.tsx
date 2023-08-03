import { getAllPosts } from "../../lib/cms";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`}>
          <div>
            <h2>{post.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
