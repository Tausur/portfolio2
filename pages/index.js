import Head from 'next/head'
import HomePage from '../components/homePage'
import mongoose from 'mongoose'
import Blog from '../model/Blog'
import Work from '../model/Work'


export default function Home(props) {
  return (
    <>
    <div>
      <Head>
        <title>Tausur Rahaman</title>
        <meta name="description" content="MetaWave - a personal portfolio" />
        <link rel="icon" href="/metaIcon.png" />
      </Head>
      <main>
        <HomePage props={props}/>
      </main>
    </div>
    </>
  )
}

export async function getServerSideProps({ context }) {
  await mongoose.connect(process.env.MONGO_URL)
  let works = await Work.find()
  works = works.reverse()
  let blogs = await Blog.find()
  blogs = blogs.reverse()
  return {
    props : {blogs : JSON.parse(JSON.stringify(blogs))}
  }
}
