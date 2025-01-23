// This is a server component in Next.js
export default async function Posts() {
    // Fetch all data from JSONPlaceholder API
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">All Posts</h1>
        <ul className="space-y-4">
          {posts.map((post:any) => (
            <li key={post.id} className="border p-4 rounded-md shadow-md">
              <a
                href={`/posts/${post.id}`}
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {post.title}
              </a>
              <p className="text-gray-600 mt-2">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  