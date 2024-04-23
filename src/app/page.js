// 'use client'
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter()
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//      This is main 
//      <button onClick={()=>router.push('/routes/home')}>Button</button>
//     </main>
//   );
// }

'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Home = () => {
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      console.log(posts, 'resopones')
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a onClick={() => router.push(`/routes/posts/${post.id}`)}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;