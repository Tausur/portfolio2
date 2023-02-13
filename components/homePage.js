import React from 'react'
import About from './About'
import { AiFillHeart } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import { CgWebsite } from 'react-icons/cg'
import BlogPost from './BlogPost'

const HomePage = (props) => {

  let styles = {
    'bio': 'text-lg px-7 py-3 inline-flex rounded-md justify-center mx-7',
    'darkBioCol': { 'background': 'rgb(49 49 52)' },
    'whiteBioCol': { 'background': 'white' },
    'darkCol': { 'background': 'rgb(32 32 35)' },
    'whiteCol': { 'background': '#f0e7db' },
    'dark': 'text-white pt-20 overflow-hidden flex md:justify-center',
    'white': 'text-black pt-20 overflow-hidden flex md:justify-center'
  }
  let blogs = [props.props.blogs[0], props.props.blogs[1]]

  return (
    <div className={props.props.theme == 'dark' ? styles.dark : styles.white} style={props.props.theme == 'dark' ? styles.darkCol : styles.whiteCol} >

      <div className='md:w-7/12'>

        <div className='flex justify-center py-5'>

          <h1 className={styles.bio} style={props.props.theme == 'dark' ? styles.darkBioCol : styles.whiteBioCol}>
            {"Hello, I'm a web developer based in Bangladesh"}
          </h1>

        </div>

        <div className='flex justify-center'>
          <div className='mx-8 py-3'>

            <p className='text-4xl font-bold' style={{ 'fontFamily': 'monospace' }}>Tausur Rahaman</p>

            <p className='text-lg font-semibold py-1'>Solo developer (Designer/ Developer/ Data Analyzer)</p>

          </div>
        </div>

        {/* ProfileImage here */}
        <div className='flex justify-center py-5'>
          <img src="/profile.jpg" alt="" className='rounded-full w-32 border-2 border-white pointer-events-none' />
        </div>

        <div className='px-10 flex justify-center'>
          <div className=''>
            {/* works */}
            <div className='flex justify-center'>
              <div className=''>
                <h1 className='text-2xl text-teal-500 font-mono border-b-4 inline-block border-gray-500'>Works</h1>
                <div className='py-5'>
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad sed excepturi ipsa accusantium corrupti eum omnis cum quae adipisci asperiores molestiae quas, praesentium enim quaerat, nulla iste velit porro vitae necessitatibus. Recusandae fuga consequuntur nemo incidunt non deserunt officiis similique, earum id tempora sapiente illum voluptate quibusdam maxime necessitatibus!</p>
                </div>
              </div>
            </div>

            {/* bio */}
            <div className='flex'>
              <About />
            </div>

            {/* I love */}
            <div className='flex'>
              <div className='md:px-0 py-5 pb-10'>
                <div className='inline-flex items-center text-2xl font-mono border-b-4 border-gray-500'>
                  <p className='pr-1 text-teal-500'>I</p>
                  <AiFillHeart className='text-red-500' />
                </div>
                <p className='py-2'>
                  Machine Learning, Drawing, Travelling, Playing Cricket, Cycling, Music
                </p>
              </div>
            </div>

            {/* on the web */}
            <div className='flex pb-2'>
              <div className='md:px-0'>
                <h1 className='text-2xl text-teal-500 font-mono inline-block border-b-4 border-gray-500'>On the web</h1>
                <div className='py-5 px-5'>

                  {/* github */}
                  <div className='flex items-center'>
                    <BsGithub className='text-xl' />
                    <button className='pl-3 text-lg text-sky-500 font-semibold '>
                      <Link href='https://github.com/tausur'>@Tausur</Link>
                    </button>
                  </div>

                  {/* Website */}
                  <div className='py-2'>
                    <div className='flex items-center'>
                      <CgWebsite className='text-xl' />
                      <button className='pl-5 text-lg text-sky-500 font-semibold '>
                        <Link href={'https://tausur-rahaman.vercel.app'}>
                          Website
                        </Link>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <h1 className='text-2xl text-teal-500 border-b-4 inline-block mb-6 border-gray-500 font-mono'>Recent Uploads</h1>
            <div className='mb-8'>
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
        </div>

      </div>

    </div>
  )
}

export default HomePage