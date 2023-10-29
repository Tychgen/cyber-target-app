import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Deal = () => {
  const scrollToWomenSales = () => {
    const womenSalesSection = document.getElementById('womenSales');
    if (womenSalesSection) {
      womenSalesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToMenSales = () => {
    const menSalesSection = document.getElementById('menSales');
    if (menSalesSection) {
      menSalesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToElectronicSales = () => {
    const electronicSalesSection = document.getElementById('electronicSales');
    if (electronicSalesSection) {
      electronicSalesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToJewelerySales = () => {
    const jewelerySalesSection = document.getElementById('jewelerySales');
    if (jewelerySalesSection) {
      jewelerySalesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <DropdownButton title="Deals" variant="light" className="mx-1">
      <Dropdown.Item>
        <Link to="#!" onClick={scrollToWomenSales}>
         Women's Clothes Deal 30%
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="#!" onClick={scrollToMenSales}>
         Men's Clothes Deal 40%
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="#!" onClick={scrollToElectronicSales}>
          Electronic Deal 25%
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="#!" onClick={scrollToJewelerySales}>
         Jewelery Deal 10%
        </Link>
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default Deal;
