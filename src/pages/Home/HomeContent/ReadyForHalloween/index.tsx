import React from 'react';
import { Link} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSlider from '../../../../store/customElements/customSlider';

const ReadyForHalloween = () => {
  return (
    <div className="col-12" style={{ backgroundColor: 'purple' }}>
      <div className="row">
        <div className="col-12 d-flex align-items-center">
          <div className="content">
            <h1 className="text-white">Ready for Halloween?</h1>
          </div>
          <p className="text-white ps-5 ms-5">
            <Link to="/circle" className="text-white">
              Join◎circle for free & score new deals every day
            </Link>
          </p>
        </div>
        <div className="col-12">
          <img
            src="/halloweendeal.png"
            alt="Tet1"
            style={{ width: '100%', height: '80%' }}
          />
        </div>
        <div className="col-12 mb-3">
          <CustomSlider/>
        </div>
      </div>
    </div>
  );
};

export default ReadyForHalloween;
