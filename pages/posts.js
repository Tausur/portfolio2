import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';
import Head from 'next/head';
import mongoose from 'mongoose'
import Blog from '../model/Blog'
import { BiSearch } from 'react-icons/bi'

const Posts = (props) => {

  let styles = {
    dark: { background: 'rgb(32 32 35)', color: 'white' },
    white: { background: '#f0e7db' }
  };

  const [search, setSearch] = useState('')

  return (
    <>

      <Head>
        <title>Tausur Rahaman - All Posts</title>
        <meta name="description" content="Tausur Rahaman - Browse all my blogs and posts" />
        <link rel="icon" href="/metaIcon.png" />
      </Head>

      <div
        style={props.theme == 'dark' ? styles.dark : styles.white}
        className="flex justify-center pt-20 pb-5 md:px-0 px-5">
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold font-mono inline-flex justify-center border-b-4 border-gray-500">
            Posts
          </h1>

          {/* Search bar */}
          <div className='mt-4 mb-7 py-1 hidden md:flex items-center justify-end'>
            <div className='px-2 inline-flex items-center md:border-b-2 border-gray-500'>
              <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='hidden md:block bg-transparent focus:outline-none px-4 py-1 md:w-60' placeholder="Search blogs by its title" />
              <button>
                <BiSearch className='text-xl mx-2 md:static' />
              </button>
            </div>
          </div>

          {/* All Posts and Blogs here */}
          <div className='flex flex-wrap'>
              {search == '' && props.blogs.map((blog) => {
                return (
                  <BlogPost key={blog._id} blogName={blog.BlogName} title={blog.title} body={blog.body} image={blog.image} ShortDesc={blog.shortDesc}/>
                )
              })}

            {search !== '' && props.blogs.map((blog) => {
                if(blog.title.toLowerCase().slice(0,search.length) == search.toLowerCase().slice(0,search.length)){
                  return(
                    <BlogPost key={blog._id} blogName={blog.BlogName} title={blog.title} body={blog.body} image={blog.image} ShortDesc={blog.shortDesc} />
                  )
                }
            })}

          </div>
        </div>
      </div>
    </>
  );
          };

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
  }
  let blogs = await Blog.find()
  blogs = blogs.reverse()
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }
  }
}

export default Posts;
