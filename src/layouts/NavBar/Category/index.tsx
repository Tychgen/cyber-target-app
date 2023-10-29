import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts, { UseProductsResult } from '../../../store/hooks/apiHook';

const Category = () => {
  const { isLoading, products }: UseProductsResult = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const categories: string[] = Array.from(new Set(products?.map((product) => product.category)));

  return (
    <div>
      <DropdownButton title="Categories" variant="light" className="mx-1">
        {categories.map((categoryItem, index) => (
            <Dropdown.Item key={index}><Link
            to={`/category/${categoryItem}`}
            style={{ textDecoration: 'none' }}
          >{categoryItem}</Link></Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default Category;
