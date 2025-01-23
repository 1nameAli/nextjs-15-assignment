import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Type definition for a Post
type Post = {
  id: number;
  title: string;
  body: string;
};

type PostPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  return {
    title: `Post ${params.id}`,
  };
}

export default async function Post({ params }: PostPageProps) {
  const { id } = params;

  // Fetch the post by ID
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound(); // Handle 404 if the post is not found
  }

  const post: Post = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.body}</p>
      <Link href="/posts" className="text-blue-600 hover:underline">
        Back to all posts
      </Link>
    </div>
  );
}
