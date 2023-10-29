import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiAnubis } from 'react-icons/gi';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { Avatar, Badge, AutoComplete } from 'antd';
import { BiUserCircle } from 'react-icons/bi';
import { selectQuantityItems } from '../../store/slices/cartSlice';
import Category from './Category';
import Deal from './Deals';
import WhatsNew from './WhatsNew';
import PickupDelivery from './Pickup&Delivery';
import { useSelector } from 'react-redux';
import { Product } from '../../store/hooks/apiHook';

const NavBar: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const quantityTotal = useSelector(selectQuantityItems);
  const [options, setOptions] = useState<Product[]>([]);
  const [productData, setProductData] = useState<Product[]>([]);

  const fetchOptions = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      const productTitles: Product[] = data.map((product: Product) => product);
      setOptions(productTitles);
      setProductData(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const handleOptionSelect = (value: string) => {
    const selectedOption = productData.find((product: Product) => product.title === value);
    if (selectedOption) {
      const productId = selectedOption.id;
      window.location.href = `/product/${productId}`;
    }
  };

  return (
    <nav className="bg-white text-dark py-2 sticky-top shadow">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-dark fs-3">
            <GiAnubis size={30} />
          </Link>
          <div className="d-flex align-items-center me-5">
            <Category />
            <Deal />
            <WhatsNew />
            <PickupDelivery />
            <form className="d-flex ps-5 ms-5">
              <div className="input-group">
                <AutoComplete
                  className="form-control form-control-lg bg-light"
                  placeholder="What can we help you find?"
                  aria-label="Search"
                  style={{ fontSize: '14px', width: '300px' }}
                  value={input}
                  onChange={(value) => setInput(value)}
                  options={options.map((option: Product) => ({
                    value: option.title,
                    label: option.title,
                  }))}
                  filterOption={(inputValue, option) =>
                    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                  onSelect={handleOptionSelect}
                />
                <button className="btn btn-outline-secondary me-5 bg-light" type="submit">
                  <AiOutlineSearch size={20} />
                </button>
              </div>
            </form>
            <div className="d-flex align-items-center me-5">
              <BiUserCircle size={20} className="me-2" />
              <Link to="/signup" className="text-dark fs-6 me-2">
                Sign Up
              </Link>
            </div>
            <NavLink className="nav-item nav-link" to="/cart">
              <Badge count={quantityTotal}>
                <Avatar size={35} icon={<AiOutlineShoppingCart />} />
              </Badge>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
