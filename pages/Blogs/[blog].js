import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io'
import { BiShareAlt,BiLinkAlt } from 'react-icons/bi'
import { BsFacebook,BsTwitter } from 'react-icons/bs'
import mongoose from 'mongoose'
import Blog from '../../model/Blog'
import { useState } from 'react';

const Blogs = (props) => {

  const router = useRouter();

  const [share, setShare] = useState(false)

  let styles = {
    dark: { background: 'rgb(32 32 35)', color: 'white' },
    white: { background: '#f0e7db' },
  };

  let i = 0
  let blogs = [props.blogs[0], props.blogs[1]]

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      console.log('URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy URL: ', err);
    }
  }
  
  

  return (
    <main>

      <div
        className="pt-24 pb-5 md:px-10 px-8"
        style={props.theme == 'dark' ? styles.dark : styles.white}>

        <div className='flex justify-center'>

          {props.blogs.map((blog) => {
            if (router.query.blog == blog.BlogName) {
              return (
                <div className='md:w-2/3 py-5' key={blog.id}>

                  <Head>
                    <title>{blog.title}</title>
                    <link rel="icon" href="/metaIcon.png" />
                  </Head>

                  <div className="flex items-center">
                    <Link href='/posts'>
                      <button className="text-2xl text-teal-500 cursor-pointer inline">Posts</button>
                    </Link>
                    <IoIosArrowForward className='text-3xl px-1 font-bold pt-2' />
                    <p className="text-2xl">{blog.title}</p>
                  </div>

                  {/* body here */}
                  <p className="py-10 text-lg">
                    {blog.shortDesc}
                  </p>

                  {/*post image */}
                  <div className='flex justify-center md:pb-5 pb-3'>
                    <img src={blog.image} className="rounded-xl md:w-[25rem] w-96" />
                  </div>

                  {blog.body.map((para) => {
                    i = i + 1
                    return (
                      <p className="py-3 text-lg" key={i}>
                        {para}
                      </p>
                    )
                  })}

                  <div className='flex items-start'>
                  <button className='rounded-full p-3 bg-teal-400 mt-3 mr-2' onClick={()=>setShare(share ? false : true)}>
                    <BiShareAlt className='text-2xl text-black'/>
                  </button>

                  {share && <div className=' bg-zinc-700 rounded-md w-32 md:w-40 py-2 space-y-2 flex flex-col justify-center'>
                    <button className='flex items-center space-x-2 text-lg hover:bg-zinc-800 duration-150 ease-in-out px-2 md:px-5 py-1' onClick={()=>handleCopy()}>
                      <BiLinkAlt/>
                      <p>Get link</p>
                    </button>
                    <button className='flex items-center space-x-2 text-lg hover:bg-zinc-800 duration-150 ease-in-out px-2 md:px-5 py-1' onClick={()=>{
                      window.location.href = "https://facebook.com";
                    }}>
                    <BsFacebook/>
                      <p>Facebook</p>
                    </button>
                    <button className='flex items-center space-x-2 text-lg hover:bg-zinc-800 duration-150 ease-in-out px-2 md:px-5 py-1' onClick={()=>{
                      window.location.href = "https://twitter.com";
                    }}>
                    <BsTwitter/>
                      <p>Twitter</p>
                    </button>
                  </div>}
                  </div>

                </div>
              )
            }
          })}

        </div>

        
        <div className='mb-8 md:mt-10 md:w-2/3 m-auto'>
        <h1 className='text-2xl text-gray-300 font-mono'>
          Recent posts
        </h1>
              {blogs.map((blog) => {
                return (
                  <div key={blog._id} className='flex my-4'>
                    <Link href={`/Blogs/${blog.BlogName}`}>
                      <img src={blog.image} alt="" className='rounded-lg md:h-32 md:w-52 h-20 w-[10rem] md:mx-3 cursor-pointer' />
                    </Link>
                    <div className="content">
                      <p className='text-lg px-2 md:px-4 font-semibold'>{blog.title}</p>
                      <p className='text-md px-2 md:px-4 md:w-5/6 hidden md:block'>{blog.shortDesc}</p>
                      <button className='text-blue-500 hover:scale-110 duration-300 ease-in-out md:px-4 px-3'>
                      <Link href={`/Blogs/${blog.BlogName}`}>Read more</Link>
                    </button>
                    </div>
                  </div>
                )
              })}
            </div>
      </div>

    </main>
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

export default Blogs;
