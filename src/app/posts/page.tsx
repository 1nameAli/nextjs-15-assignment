import Link from "next/link";

// TypeScript type definition for a Post
type Post = {
    id: number;
    title: string;
    body: string;
  };
  
  // The `Posts` page component (a server component by default)
  export default async function Posts() {
    // Fetch all posts from the API
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store", // Ensures fresh data on every request
    });
    const posts: Post[] = await res.json(); // Ensure the response matches the `Post` type
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">All Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded-md shadow-md">
              {/* Dynamic link to the post details */}
              <Link
                href={`/posts/${post.id}`}
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-gray-600 mt-2">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  