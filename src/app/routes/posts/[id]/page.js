// // 'use client'
// // import { useEffect, useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import { useParams } from 'next/navigation';
// const Post = ({params}) => {
// //   const router = useRouter();
// //   const { id } = useParams()
// //   console.log(id, 'this is id')
// console.log(params.id, 'this is params')

// const id = 2
//  const mydata = async ()=>{
//  const data = await Getdatafromapi(id)
//     console.log(data)
//  }

//  mydata()

// //   const [post, setPost] = useState(null);

// //   useEffect(() => {
// //     const fetchPost = async () => {
// //       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
// //       const post = await response.json();
// //       console.log(post, 'this is a response')
// //       setPost(post);
// //     };

// //     if (id) {
// //       fetchPost();
// //     }
// //   }, [id]);

// //   if (!post) {
// //     return <div>Loading...</div>;
// //   }

//   return (
//     <div>
//       {/* <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button type="button" onClick={() => router.push('/')}>
//         Go back to Home
//       </button> */}

//       hello form api
//     </div>
//   );
// };

// export default Post;


// // app/routes/posts/[id]/page.js

// // import { useRouter } from 'next/router';

// // const Post = ({ post }) => {
// //   const router = useRouter();

// //   if (!post) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>{post.title}</h1>
// //       <p>{post.body}</p>
// //       <button type="button" onClick={() => router.push('/')}>
// //         Go back to Home
// //       </button>
// //     </div>
// //   );
// // };

// // export async function getServerSideProps({ params }) {
// //   const { id } = params;
// //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
// //   const post = await response.json();

// //   return {
// //     props: {
// //       post,
// //     },
// //   };
// // }

// // export default Post;


// export async function Getdatafromapi(id){

//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await response.json();
//   console.log(post, 'this is posts')

// }




// method second 

import React from 'react';

const Post = ({ params }) => {
    console.log(params.id, 'this is id')
  return (
    <div>
      <h1>Loading...</h1>
      <Getdatafromapi id={params.id} />
    </div>
  );
};

export default Post;

async function Getdatafromapi(id) {
    console.log(id.id,'id')
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}`);
    const post = await response.json();
    console.log(post); // Log the fetched data

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error fetching data</div>;
  }
}
