import React from 'react'
import { useState } from 'react'

const AdminWorkPost = (theme) => {

  const [productName, setProductName] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [shortDesc, setShortDesc] = useState('')
  const [info, setInfo] = useState({})
  const [website, setWebsite] = useState('')
  const [stack, setStack] = useState('')
  const [blog, setBlog] = useState('')
  const [platform, setPlatform] = useState('')

  const handler = async()=>{
    setInfo({
    "Website" : website,
    "Stack" : stack,
    "Platform" : platform,
    "Blog" : blog
    })
    const data = {productName, title, image, body, shortDesc, info}
    const res = await fetch('/api/addWork', {
      method : 'POST',
      body : JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    }).then((res)=>{
      if(res.ok){
        alert("Blog has been added")
      }
    }).catch((err)=>{
      console.error(err)
    })
  }

  return (
    <div className='border-l-2 border-gray-500 px-2'>
      <h1 className='text-2xl font-mono text-sky-500 border-b-4 border-gray-600 px-2 inline-block'>Add Work</h1>

      {/* Input section */}
      <div className='py-5'>

        <div className='pr-2 flex items-center'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>ProductName :</p>
          <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
        </div>

        <div className='pr-2 flex items-center py-2'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>Title :</p>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg'/>
        </div>

        <div className='pr-2 flex items-center py-2'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>ShortDesc :</p>
          <input type="text" value={shortDesc} onChange={(e)=>setShortDesc(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
        </div>

        <div className='pr-2 flex items-center py-2'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>Image :</p>
          <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
        </div>

        <div className='pr-2 flex items-center py-2'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>Body :</p>
          <input type="text" value={body} onChange={(e)=>setBody(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg'/>
        </div>

        <div className='pr-2 items-center py-2'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>Info :</p>
          <div className='pl-5 block py-3'>

            <div className='flex items-center py-1'>
              <p className='text-sky-500 font-mono font-semibold text-xl'>Website :</p>
              <input type="text" value={website} onChange={(e)=>setWebsite(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg'/>
            </div>

            <div className='flex items-center py-1'>
              <p className='text-sky-500 font-mono font-semibold text-xl'>Platform :</p>
              <input type="text" value={platform} onChange={(e)=>setPlatform(e.target.value)}  className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg'/>
            </div>

            <div className='flex items-center py-1'>
              <p className='text-sky-500 font-mono font-semibold text-xl'>Stack :</p>
              <input type="text" value={stack} onChange={(e)=>setStack(e.target.value)}  className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg'/>
            </div>

            <div className='flex items-center py-1'>
              <p className='text-sky-500 font-mono font-semibold text-xl'>Blog :</p>
              <input type="text" value={blog} onChange={(e)=>setBlog(e.target.value)}  className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg'/>
            </div>

          </div>
        </div>

        <button className='px-8 py-2 rounded-lg bg-teal-500 font-semibold text-xl duration-300 ease-in-out hover:bg-sky-500 my-6 mx-32' onClick={handler} >
          Post
        </button>

      </div>

    </div>
  )
}

export default AdminWorkPost