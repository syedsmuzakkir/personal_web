'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
const Post = () => {
  const router = useRouter();
  const { id } = useParams()
  console.log(id, 'this is id')

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = await response.json();
      console.log(post, 'this is a response')
      setPost(post);
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button type="button" onClick={() => router.push('/')}>
        Go back to Home
      </button>
    </div>
  );
};

export default Post;


// app/routes/posts/[id]/page.js
// import { useRouter } from 'next/router';

// const Post = ({ post }) => {
//   const router = useRouter();

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button type="button" onClick={() => router.push('/')}>
//         Go back to Home
//       </button>
//     </div>
//   );
// };

// export async function getServerSideProps({ params }) {
//   const { id } = params;
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await response.json();

//   return {
//     props: {
//       post,
//     },
//   };
// }

// export default Post;