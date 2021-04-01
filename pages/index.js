import React from 'react'
import { instanceOne } from './_app';
import Link from 'next/link'

export default function index({ data }) {
  return (
    <div className='block'>
      {
        data.map((post, index) => {
          return (
            <Link key={index} href={`/posts/${post.id}`} className='px-10'>
              <a className='title'>
                {post.title}
              </a>
            </Link>
          )
        })
      }
    </div>
  )
}

export async function getServerSideProps() {
  const res = await instanceOne.get(`https://jsonplaceholder.typicode.com/posts`);
  if (res.status === 200) {
    return {
      props: { data: res.data },
    };
  } else {
    return {
      props: { data: null },
    };
  }
}