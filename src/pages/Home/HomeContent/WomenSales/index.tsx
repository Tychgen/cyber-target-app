import React, { useRef } from 'react';
import { Link,} from 'react-router-dom';
import { Image } from 'antd';

const WomenSales = () => {
  return (
    <div className="col-12"  id='womenSales'>
      <div className="row">
        <div className="col-12 d-flex align-items-center">
          <Link to={`category/women's%20clothing`}>
            <Image
              width={`100%`}
              height={200}
              preview={false}
              src='/deal30.png'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WomenSales;
