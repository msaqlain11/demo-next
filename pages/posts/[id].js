import React from 'react'
import { instanceOne } from '../_app';

export default function id({data}) {
    return (
        <div className='PostDiv'>
            <h6>{data.title}</h6>
            <p>{data.body}</p>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    // console.log(query)
    // Fetch data from external API
    const res = await instanceOne.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
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
