import React from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from 'antd'

const ElectronicSales = () => {
  return (
    <div className="col-12" id='electronicSales'>
    <div className="row">
        <div className="col-12 d-flex align-items-center">
        </div>
        <NavLink to={`category/electronics`}>
        <Image
        width={`100%`}
        height={200}
        preview={false}
        src='/deal40.png'/>
        </NavLink>
      </div>
    </div>
  )
}

export default ElectronicSales
