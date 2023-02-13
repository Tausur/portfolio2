import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mongoose from 'mongoose'

function MyApp({ Component, pageProps }) {

  const [mode, setMode] = useState('dark')

  const getData = (data) => {
    setMode(data)
  }

  return <>
    <div className='fixed w-full backdrop-blur'>
      <Navbar onSubmit={getData} />
    </div>

    <Component {...pageProps} theme={mode} />
    <Footer theme={mode} />
  </>
}

// export async function getServerSideProps({ context }) {
//   await mongoose.connect(process.env.MONGO_URL)
//   return {
//     props : {}
//   }
// }

export default MyApp
