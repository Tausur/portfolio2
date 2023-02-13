import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Head from 'next/head';
import mongoose from 'mongoose';
import Work from '../../model/Work'

const Works = (props) => {

  const router = useRouter();

  let styles = {
    dark: { background: 'rgb(32 32 35)', color: 'white' },
    white: { background: '#f0e7db' },
  };

  let i = 0

  return (

    <main className=''>

      <div
        className="pt-24 pb-5 md:px-10 px-8"
        style={props.theme == 'dark' ? styles.dark : styles.white}>

        <div className='flex justify-center'>

          {props.works.map((data) => {
            if (data.productName == router.query.work) {
              return (
                <div className='md:w-1/2 py-5' key={data._id}>

                  <Head>
                    <title>{data.title}</title>
                    <link rel="icon" href="/metaIcon.png" />
                  </Head>

                  <div className="flex items-center">
                    <Link href='/works'>
                      <button className="text-2xl text-teal-500 cursor-pointer">Works</button>
                    </Link>
                    <IoIosArrowForward className='text-3xl px-1 pt-2 font-bold' />
                    <p className="text-2xl cursor-pointer">{data.productName}</p>
                  </div>

                  <p className="pt-10 pb-5 text-lg">
                    {data.shortDesc}
                  </p>

                  {/* Info */}
                  <div className='md:py-7 py-5'>

                    <div className='flex items-center'>
                      <p className='px-2 font-lg text-green-900 rounded-md font-bold inline-block' style={{ 'background': 'rgb(104 148 120)' }}>Website</p>
                      <Link href={`https://${data.info[0].Website}`}>
                        <p className='pl-3 underline cursor-pointer text-lg text-fuchsia-500'>{data.info[0].Website}</p>
                      </Link>
                      <HiOutlineExternalLink className='text-fuchsia-500 mt-1 mx-1'/>
                    </div>

                    <div className='flex items-center'>
                      <p className='px-2 font-lg text-green-900 rounded-md font-bold inline-block' style={{ 'background': 'rgb(104 148 120)' }}>Platform</p>
                      <p className='px-2 font-semibold text-lg text-fuchsia-500'>{data.info[0].Platform}</p>
                    </div>

                    <div className='flex items-center '>
                      <p className='px-2 font-lg text-green-900 rounded-md font-bold inline-block' style={{ 'background': 'rgb(104 148 120)' }}>Stack</p>
                      <p className='px-3 font-semibold text-lg text-fuchsia-500'>{data.info[0].Stack}</p>
                    </div>

                    <div className='flex items-center'>
                      <p className='px-2 font-lg text-green-900 rounded-md font-bold inline-block' style={{ 'background': 'rgb(104 148 120)' }}>BlogPost</p>
                      <Link href={`https://metawave.vercel.app/Blogs/${data.info[0].Blog}`}>
                        <p className='pl-3 cursor-pointer underline text-lg text-fuchsia-500'>{`/Blogs/${data.info[0].Blog}`}</p>
                      </Link>
                      <HiOutlineExternalLink className='text-fuchsia-500 mt-1 mx-1'/>
                    </div>

                  </div>

                  {/*post image */}
                  <div className='flex justify-center'>
                    <img src={data.image} className="rounded-xl md:w-96 w-96" />
                  </div>

                  {
                  data.body.map((para) => {
                    i = i + 1
                    return (
                      <p className="py-5 text-lg" key={i}>
                        {para}
                      </p>
                    )
                  })}

                </div>
              )
            }
          })}

        </div>
      </div>

    </main>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
  }
  let works = await Work.find()
  works = works.reverse()
  return {
    props: { works: JSON.parse(JSON.stringify(works)) }
  }
}

export default Works;
