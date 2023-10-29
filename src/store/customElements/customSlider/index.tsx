import React, { useState } from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import useProducts,{UseProductsResult, Product} from '../../hooks/apiHook';
import ModalContent from '../../../pages/Home/HomeContent/ReadyForHalloween/Modal';

const CustomSlider = () => {
  const { products, isLoading }: UseProductsResult = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (products: Product) => {
    setSelectedProduct(products);
    setIsModalOpen(true);
  };

  const MAX_PARAGRAPH_LENGTH = 100;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <div>
      <Slider {...settings}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products?.map((product, index) => (
            <div key={index} className="card">
              <NavLink to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={`Product ${index + 2}`}
                  className="card-img-top"
                  style={{ width: '30%', height: `4rem` }}
                />
              </NavLink>
              <div className="card-body">
                <h5 className="card-title">{product.price}</h5>
                <p
                  className="card-text"
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '100%',
                  }}
                >
                  {product.description.length > MAX_PARAGRAPH_LENGTH
                    ? product.description.substring(0, MAX_PARAGRAPH_LENGTH)
                    : product.description}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => showModal(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </Slider>
    <ModalContent setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} selectedProduct={selectedProduct}/>
    </div>
  );
};

export default CustomSlider;
