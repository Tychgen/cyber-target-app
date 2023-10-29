import React from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from 'antd'

const JewelerySales = () => {
  return (
    <div className="col-12" id="jewelerySales">
    <div className="row">
        <div className="col-12 d-flex align-items-center">
        </div>
        <NavLink to={`category/jewelery`}>
        <Image
        width={`100%`}
        height={200}
        preview={false}
        src='/deal50.png'/>
        </NavLink>
      </div>
    </div>
  )
}

export default JewelerySales
