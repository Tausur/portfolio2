import React from 'react'

const Footer = (props) => {

  let styles = {
    'darkcol' : {'background':'rgb(32 32 35)'},
    'whitecol' : {'background' : '#f0e7db'}
  }

  return (
    <div className='flex justify-center text-gray-500 pb-7' style={props.theme == 'dark' ? styles.darkcol:styles.whitecol}>
      <p className='text-md'>© 2022 Tausur Rahaman. All Rights Reserved.</p>
    </div>
  )
}

export default Footer