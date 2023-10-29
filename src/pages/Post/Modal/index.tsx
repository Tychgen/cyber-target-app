import React, {useState} from 'react'
import {Modal, Button, Typography, Space} from 'antd'
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../store/hooks/apiHook';
import { addToCart, increaseQuantityTotal } from '../../../store/slices/cartSlice';
import { useAppDispatch } from '../../../store/hooks/storeHooks';
import CustomButtons from '../../../store/customElements/customButtons';

interface ModalContentProps {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    selectedProduct: Product | null;
  }


  const PostModalContent: React.FC<ModalContentProps> = ({ isModalOpen, setIsModalOpen, selectedProduct }) => {
    const { Text} = Typography;
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [selectedButton, setSelectedButton] = useState('Pickup');
    const [addedToCart, setAddedToCart] = useState(false);
    
    const handleAddToCart = (id: number) => {
        const cartItem= {
          id: id,
          quantity: 1,
        };
      
        dispatch(addToCart(cartItem));
        dispatch(increaseQuantityTotal());
        setAddedToCart(true); 
      };


    const handleButtonSelect = (buttonName: string) => {
      setSelectedButton(buttonName);
    };



    const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const getButtonText = () => {
        switch (selectedButton) {
          case 'Pickup':
            return 'Pick up at Cedar Rapids South Ready by October 25 for pickup inside the store';
          case 'Delivery':
            return 'Same Day Delivery to 52404 from Cedar Rapids SouthGet it as soon as 2am today with Shipt Free with membership or $9.99/delivery';
          case 'Shipping':
            return 'Ship to 52404 Free shipping with RedCard or $35 orders ';
          default:
            return 'Add to Cart';
        }
      };

  return (
    <Modal
    title="Choose options"
    open={isModalOpen}
    onOk={handleOk}
    onCancel={handleCancel}
    footer={null}
  >
   <div>
        {selectedProduct && (
          <>
            <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '40%' }} />
            <h2>{selectedProduct.title}</h2>
            <p>Price: ${selectedProduct.price}</p>
          </>
        )}
      </div>

      <CustomButtons handleButtonSelect={handleButtonSelect} />
      <br />
      <Space direction='vertical'>
      <Text type="success">{getButtonText()}</Text>
      </Space>
      {selectedProduct ? (
  addedToCart ? (
    <Button
    danger
    style={{ width: '100%', marginTop: '10px' }}
    onClick={() => navigate('/cart')}>{selectedProduct.title} Added to Cart</Button>
  ) : (
    <Button
      type="primary"
      danger
      style={{ width: '100%', marginTop: '10px' }}
      onClick={() => {
        handleAddToCart(selectedProduct.id);
        setAddedToCart(true);
      }}
    >
      Add to Cart
    </Button>
  )
) : null}
  </Modal>
  )
}

export default PostModalContent
