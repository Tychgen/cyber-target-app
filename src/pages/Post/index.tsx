import { useParams, NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Rate } from 'antd';
import {FaShoppingCart, FaLongArrowAltLeft} from 'react-icons/fa'
import { addToCart, removeFromCart, decreaseQuantityTotal, selectCartItems, CartItems, increaseQuantityTotal } from '../../store/slices/cartSlice';
import { addToFavlist } from '../../store/slices/favouriteSlice';
import { addToSavedForLater } from '../../store/slices/savedForLaterSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/storeHooks';
import useProducts,{Product} from '../../store/hooks/apiHook';
import PostModalContent from './Modal';



const fetchData = async (id?:string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

const Post = () => {
    const {products} = useProducts();
    const dispatch = useAppDispatch()
    const cartItems: CartItems[] = useAppSelector(selectCartItems) || [];
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (products: Product) => {
    setIsModalOpen(true);
  };
  
    const { id } = useParams()
    const { isLoading, data} = useQuery({
      queryKey: ['projects', id],
      queryFn: () => fetchData(id),
      enabled: !!id,
    })
  
    const selectedProduct = data;
    
    const handleAddToCart = (id: number) => {
      const cartItem= {
        id: id,
        quantity: 1,
      };
    
      dispatch(addToCart(cartItem));
      dispatch(increaseQuantityTotal());
    };

    const handleRemoveFromCart = (id: number) => {
        const cartItem = {
          id: id,
          quantity: 1, 
        };
      
        dispatch(removeFromCart(cartItem));
        dispatch(decreaseQuantityTotal());
      };
  
  
  
   
  
    const otherProducts = products && selectedProduct ? products.filter(product => product.category === selectedProduct.category && product.id !== selectedProduct.id) : [];
  
  
    if(isLoading){
      return <div>Loading...</div>
    }
    
    if (!selectedProduct) {
      return null
    }

  
    return (
      <div className="container mt-5 mb-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6 border-end">
            <div className="d-flex flex-column justify-content-center">
            <NavLink to="/" className="text-body border fs-3">
                          <i className="me-2"><FaLongArrowAltLeft/></i>Continue shopping
             </NavLink>
             <br/>
              <div className="main_image">
                <img src={selectedProduct.image} width="350" alt={selectedProduct.title} />
              </div>
              <div className="thumbnail_images">
                <ul id="thumbnail">
                  <li><img src={selectedProduct.image} alt={selectedProduct.title} width="50" /></li>
                  <li>{}</li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 right-side">
              <div className="d-flex justify-content-between align-items-center">
                <h3>{selectedProduct.title}</h3>
                <span className="heart"><i className='bx bx-heart'></i></span>
              </div>
              <div className="mt-2 pr-3 content">
                <p>{selectedProduct.description}</p>
              </div>
              <h3>${selectedProduct.price}</h3>
              <div className="ratings d-flex flex-row align-items-center">
              <em className='pe-1'>Rating by Customers:</em>
              <Rate disabled defaultValue={selectedProduct.rating.rate}/>
                {/* {selectedProduct.rating.rate < 3
                  ? <><em className='pe-1'>Rating by Customers:</em>  <span className='text-danger'> {selectedProduct.rating.rate}</span></>
                  :  <><em className='pe-1'>Rating by Customers:</em>  <span className='text-primary'> {selectedProduct.rating.rate} </span></>} */}
              </div>
              <div className="mt-5">
                <span className="fw-bold">Stock</span>
                <div className="colors">
                  <ul id="marker">
                    {selectedProduct.rating.count > 200
                      ? <li className="marker-1 text-success">{selectedProduct.rating.count}</li>
                      : <li className="marker-1 text-danger">{selectedProduct.rating.count}</li>}
                  </ul>
                </div>
              </div>
              <div className="buttons d-flex flex-row mt-5 gap-3">
                <button className="btn btn-outline-dark"><NavLink to="/cart">Buy Now</NavLink></button>
                <button className='btn btn-danger' onClick={()=> openModal(selectedProduct)}>Add to Cart</button>
                <button className="btn btn-danger" onClick={() => handleRemoveFromCart(selectedProduct.id)}>
                Remove from Cart
                 </button>
                 <button className="btn btn-outline-dark" onClick={() => dispatch(addToFavlist({id:selectedProduct.id,isFav:!selectedProduct.isFav}))}>Add to Favourite</button>
                 <button className="btn btn-outline-dark" onClick={() => dispatch(addToSavedForLater({id:selectedProduct.id,isSaved:!selectedProduct.isSaved}))}>Save for Later</button>
              </div>
            </div>
          </div>
          <h2 className='ps-5 ms-5'>Eligible items</h2>
        </div>
        {otherProducts.map((product) => (
        <div className="ratings d-flex flex-row align-items-center" key={product.id}>
          <div className="d-flex pt-2">
          <em className='pe-1'>Rating by Customers:</em>
              <Rate disabled defaultValue={product.rating.rate}/>
            <NavLink to={`/product/${product.id}`}>
              <img className='border' src={product.image} alt={product.title} width="150" /> {product.title} <em className='badge bg-primary'>Stock :</em> {product.rating.count > 200
                ? <em className=" text-success">{product.rating.count}</em>
                : <em className=" text-danger">{product.rating.count}</em>}
                <br/>
              <button className='btn btn-danger'>Add to Cart</button>
            </NavLink>
          </div>
        </div>
      ))}
      </div>
      <PostModalContent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedProduct={selectedProduct}
      />
    </div>
        )
  }
  export default Post