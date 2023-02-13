import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AdminPost = (props) => {

  const [productName, setProductName] = useState(props.data.productName)
  const [title, setTitle] = useState(props.data.title)
  const [image, setImage] = useState(props.data.image)
  const [body, setBody] = useState(props.data.body)
  const [shortDesc, setShortDesc] = useState(props.data.shortDesc)
  const [info, setInfo] = useState(props.data.info)
  const [website, setWebsite] = useState(props.data.info[0].Website)
  const [stack, setStack] = useState(props.data.info[0].Stack)
  const [blog, setBlog] = useState(props.data.info[0].Blog)
  const [platform, setPlatform] = useState(props.data.info[0].Platform)

  const id = props.id

  const handler = async () => {
    setInfo({
      Website: website,
      Platform: platform,
      Stack: stack,
      Blog: blog
    })

    console.log(info)
    const data = { title, id, shortDesc, image, info, body, productName }
    const res = await fetch('/api/updateWork', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    }).then((res) => {
      if (res.ok) {
        alert("Blog has been updated")
      }
    }).catch((err) => {
      console.error(err)
    })
  }

  let i = -1

  return (
    <div className='border-l-2 border-gray-500 px-2'>
      <h1 className='text-2xl font-mono text-sky-500 border-b-4 border-gray-600 px-2 inline-block'>Update Blog</h1>

      {/* Input section */}
      <div className='py-5' key={props.id}>

        <div className='pr-2 flex items-center'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>BlogName :</p>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
        </div>

        <div className='pr-2 flex items-center py-2'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>Title :</p>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
        </div>

        <div className='pr-2 flex items-center py-2'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>ShortDesc :</p>
          <input type="text" value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
        </div>

        <div className='pr-2 flex items-center py-2'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>Image :</p>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
        </div>

        <div className='pr-2 items-center py-2'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>Body :</p>

          {body.map((para) => {
            i += 1
            return (
              <div className='block ml-5' key={para._id}>
                <textarea cols={20} rows={4} type="text" value={body[i]} onChange={(e) => setBody(e.target.value)} className='bg-transparent focus:outline-none border-2 rounded-md p-2 border-gray-500 ml-2 text-lg w-full' />
              </div>
            )
          })}

        </div>

        <div className='pr-2 items-center py-2'>
          <p className='text-teal-500 font-mono font-semibold text-xl'>Info :</p>


          <div className='block ml-5'>
            <div className='flex items-center'>
              <p className='text-lg text-sky-500 font-semibold'>Website :</p>
              <input cols={20} rows={4} type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
            </div>
          </div>

          <div className='block ml-5'>
            <div className='flex items-center'>
              <p className='text-lg text-sky-500 font-semibold'>Stack :</p>
              <input cols={20} rows={4} type="text" value={stack} onChange={(e) => setStack(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
            </div>
          </div>

          <div className='block ml-5'>
            <div className='flex items-center'>
              <p className='text-lg text-sky-500 font-semibold'>Platform :</p>
              <input cols={20} rows={4} type="text" value={platform} onChange={(e) => setPlatform(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
            </div>
          </div>

          <div className='block ml-5'>
            <div className='flex items-center'>
              <p className='text-lg text-sky-500 font-semibold'>Blog :</p>
              <input cols={20} rows={4} type="text" value={blog} onChange={(e) => setBlog(e.target.value)} className='bg-transparent focus:outline-none border-b-2 border-gray-500 ml-2 text-lg' />
            </div>
          </div>


        </div>

        <button className='px-8 py-2 rounded-lg bg-teal-500 font-semibold text-xl duration-300 ease-in-out hover:bg-sky-500 my-6 mx-32' onClick={handler} >
          Update
        </button>

      </div>

    </div>
  )
}

export default AdminPost