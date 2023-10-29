import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useProducts, {UseProductsResult} from '../../../../store/hooks/apiHook'


const DealOfTheDay = () => {
  const { isLoading, products}: UseProductsResult = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const firstTwoProducts = products?.slice(0, 2);

  return (
    <div className="col-12 bg-danger">
      <div className="row">
        <div className="col-12 d-flex align-items-center">
          <div className="content">
            <h1 className="text-white">Deal of the Day</h1>
          </div>
          <p className="text-white ps-5 ms-5">
            <Link to="/circle" className="text-white">
              Join◎circle for free & score new deals every day
            </Link>
          </p>
        </div>
        {firstTwoProducts?.map((product, index) => (
          <div className="col-5" key={index}>
            <NavLink to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '50%' }}
              className='ps-5 ms-5'
            />
            </NavLink>
            <Link to={`/product/${product.id}`} className="text-white ps-5 ms-5">{product.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DealOfTheDay
