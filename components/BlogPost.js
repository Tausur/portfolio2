import React from 'react';
import Link from 'next/link'
import { BsCalendarCheck } from 'react-icons/bs'

const BlogPost = (props) => {
  const body = JSON.stringify(props.body)
  const short = body.slice(2,70)
  return (
    <div className='flex justify-center md:w-1/3 rounded-md hover:scale-110 duration-500 ease-in-out'>
      <div className="py-6 md:mx-2 mx-5">
        <Link href={`/Blogs/${props.blogName}`}>
          <img
            src={props.image}
            alt=""
            className={
              'md:w-72 md:h-40 w-full rounded-xl object-cover object-center shadow-xl cursor-pointer'
            }
          />
        </Link>
        <div className=''>
          <p className="text-xl font-semibold flex justify-center">{props.title}</p>
          <div className="px-5 py-2">
            <div className='flex items-center space-x-2 md:my-2 my-1 text-green-400'>
              <BsCalendarCheck className='text-xl' />
              <p className='font-mono rounded-md text-gray-200 w-36 text-center'>January 16, 2023</p>
            </div>
            {short} ...
          </div>
          <button className='text-blue-500 cursor-pointer ml-5 hover:scale-110 duration-200 ease-in-out'><Link href={`/Blogs/${props.blogName}`}>Read more</Link></button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
