import React from 'react'

const Post = ({post}) => {
  return (
    <li className='p-3 my-5 bg-stone-200' key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
    </li>
  )
}

export default Post