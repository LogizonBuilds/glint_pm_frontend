"use client"
import React from 'react'
import BlogHero from '@/components/BlogHero'
import { useParams } from 'next/navigation'
import { BlogData } from '@/components/BlogDetailsContent'
import BlogDetailsContent from '@/components/BlogDetailsContent'



const BlogsDetail = () => {
  const {id} = useParams()
  console.log(id)
  const blog: BlogData = {
    id: 1,
    title: 'Blog 1',
    content: 'This is the content of blog 1',
    author: 'Author 1',
    date: '2021-01-01',
    image: '/images/blogimg.png',
  }

  const blogs = [blog, blog, blog]

  return (
    <>
    <BlogHero/>
    <div className='mt-6 p-12'>
      <BlogDetailsContent data={blog} blogs={blogs} />

    </div>
    </>
  )
}

export default BlogsDetail