import React from 'react'
// a component that when clicked will open a modal to add post to my page
import AddPost from '../components/AddPost'
// another component to retrieve all the posts from the database
import PostList from '../components/PostList'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/posts", {cache: "no-cache"});
    if (!res.ok){
        throw new Error("Failed to fetch data")
    }
    return res.json();
}

const page = async () => {
    const posts = await getData()
    console.log(posts)
    return (
    <main className='flex flex-col justify-between p-24'>
        <h1 className='p-5'>This is posts page</h1>
        <div>
            <AddPost />
            <PostList post={posts}/>
        </div>
    </main>
  )
}

export default page