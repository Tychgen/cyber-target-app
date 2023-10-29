import { useParams, NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { Tooltip } from 'antd';
import { addToCart, removeFromCart, decreaseQuantityTotal, selectCartItems, CartItems, increaseQuantityTotal } from '../../../store/slices/cartSlice';
import {FaPlus, FaMinus, FaHeart,FaSearchDollar, FaSave} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { addToFavlist, selectFavlist, removeFromFavlist } from '../../../store/slices/favouriteSlice';
import { addToSavedForLater, selectSavedForLater, removeFromSavedForLater } from '../../../store/slices/savedForLaterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks';
import useProducts from '../../../store/hooks/apiHook';
import './styles.css'



const fetchData = async (category?:string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
const ProductList = () => {
    const {products} = useProducts();
    const dispatch = useAppDispatch()
    const favlist = useAppSelector(selectFavlist);
    const savedForList = useAppSelector(selectSavedForLater)
    const cartItems: CartItems[] = useAppSelector(selectCartItems) || [];

    const { category } = useParams()
    const { isLoading, data} = useQuery({
      queryKey: ['projects', category],
      queryFn: () => fetchData(category),
      enabled: !!category,
    })
    
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
    

    const filteredProducts = products?.filter(product => product.category === category);

  return (
    <section className="section-products">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-8 col-lg-6">
          <div className="header">
            <h2>{category}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredProducts?.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4 col-xl-3 bg-dark">
          <div id={`product-${product.id}`} className="single-product product-1">
            <div className="part-1">
              <br />
              <NavLink to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </NavLink>
              <ul>
                <li>
                  <Tooltip title="Add to Cart">
                    <NavLink to="#" onClick={() => handleAddToCart(product.id)}>
                      <FaPlus />
                    </NavLink>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Remove from Cart">
                    <NavLink to="#" onClick={() => handleRemoveFromCart(product.id)}>
                      <FaMinus />
                    </NavLink>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title={favlist.find((item) => item.id === product.id)?.isFav ? "Remove from Favorites" : "Add to Favorites"}>
                  <NavLink to="#" onClick={() => {
                  if (favlist.find((item) => item.id === product.id)?.isFav) {
                   dispatch(removeFromFavlist({ id: product.id, isFav: !product.isFav }));
                  } else {
                  dispatch(addToFavlist({ id: product.id, isFav: !product.isFav }));
                  }
                  }}>
                  {favlist.find((item) => item.id === product.id)?.isFav ? (
                  <em className="heart">
                  <FaHeart color="red" />
                  </em>
                  ) : (
                  <FaHeart />
                  )}
                  </NavLink>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title={savedForList.find((item) => item.id === product.id)?.isSaved ? "Remove from Saved" : "Save for Later"}>
                  <NavLink to="#" onClick={() => {
                  if (savedForList.find((item) => item.id === product.id)?.isSaved) {
                   dispatch(removeFromSavedForLater({ id: product.id, isSaved: !product.isSaved }));
                  } else {
                  dispatch(addToSavedForLater({ id: product.id, isSaved: !product.isSaved }));
                  }
                  }}>
                  {savedForList.find((item) => item.id === product.id)?.isSaved ? (
                  <em className="heart">
                  <FaSave color="red" />
                  </em>
                  ) : (
                  <FaSave />
                  )}
                  </NavLink>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title={`Go to Cart (${cartItems.find((item) => item.id === product.id)?.quantity})`}>
                    <NavLink to="/cart">
                      <AiOutlineShoppingCart />{' '}
                    </NavLink>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Product's Page">
                    <NavLink to={`/product/${product.id}`}>
                      <FaSearchDollar />
                    </NavLink>
                  </Tooltip>
                </li>
              </ul>
            </div>
            <div className="part-2">
              <h3 className="product-title rounded-pill bg-dark text-light fs-6 ps-2">
                {product.title}
              </h3>
              <h4 className="product-price">
                <span className="bg-danger border-secondary">${product.price}</span>
              </h4>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default ProductList;
