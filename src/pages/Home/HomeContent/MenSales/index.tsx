import React from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from 'antd'

const MenSales = () => {
  return (
    <div className="col-12" id='menSales'>
    <div className="row">
        <div className="col-12 d-flex align-items-center">
        </div>
        <NavLink to={`category/men's%20clothing`}>
        <Image
        width={`100%`}
        height={200}
        preview={false}
        src='/deal20.png'/>
        </NavLink>
      </div>
    </div>
  )
}

export default MenSales
