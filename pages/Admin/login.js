import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FaUserCog } from 'react-icons/fa'
import { BsShieldLockFill } from 'react-icons/bs'

const Login = (props) => {

  const router = useRouter()

  const theme = props.theme

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const styles = {
    'dark': { 'background': 'rgb(32 32 35)', 'color': 'white' },
    'white': { 'background': 'white' },
  }

  const handler = async()=>{
    const data = {name,password}
    const res = await fetch('/api/admin', {
      method : 'POST',
      body : JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    }).then((res)=>{
      if(res.ok){
        router.push('/Admin')
      }else{
        alert("Something went wrong")
      }
    })
  }


  return (
    <div style={theme == 'dark' ? styles.dark : styles.white} className='h-screen'>
      <div className='pt-40 flex justify-center'>
        <div className='py-5'>
          <h1 className='text-3xl font-mono text-teal-500 font-bold'>Admin Login</h1>

          {/* Input section */}
          <div className='pt-8'>

            <div className='flex justify-center items-center border-b-2 border-gray-500 my-3'>
              <FaUserCog className='text-2xl '/>
              <input type="text" className='py-2 pr-8 pl-4 focus:outline-none bg-transparent text-xl' placeholder='Username' value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>

            <div className='flex justify-center items-center border-b-2 border-gray-500 my-3'>
              <BsShieldLockFill className='text-xl '/>
              <input type="password" className='py-2 pr-8 pl-4 focus:outline-none bg-transparent text-xl' placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
            </div>

            <button type='submit' onClick={handler} className='ml-20 mt-5 px-5 py-1 text-2xl font-mono rounded-md bg-teal-500 hover:bg-sky-500 duration-500 ease-in-out flex justify-center items-center'>
              Login
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login