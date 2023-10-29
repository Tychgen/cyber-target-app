import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DealOfTheDay from './DealOfTheDay';
import ReadyForHalloween from './ReadyForHalloween';
import WomenSales from './WomenSales';
import MenSales from './MenSales';
import ElectronicSales from './ElectronicSales';
import JewelerySales from './JewelerySales';

const HomeContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="content-column">
          </div>
        </div>
        <div className="col-3">
          <div className="content-column">
          </div>
        </div>  
       <DealOfTheDay/>
       <div className='py-2'></div>
       <ReadyForHalloween/>
       <div className="py-2"></div>
       <WomenSales/>
       <div className="py-2"></div>
       <MenSales/>
       <div className="py-2"></div>
       <ElectronicSales/>
       <div className="py-2"></div>
       <JewelerySales/>
        <div className="col-1">
          <div className="content-column">
          </div>
        </div>
        <div className="col-1">
          <div className="content-column">
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
