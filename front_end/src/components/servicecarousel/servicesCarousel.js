import React, { Component } from 'react';
import './servicesCarousel.css';
import AcrepairingService from '../../images/AcrepairingService.jpg';
import carpanterService from '../../images/carpanterService.jpg';
import homeAppliancesSercvice from '../../images/homeAppliancesSercvice.jpg';
import homeCleaningService from '../../images/homeCleaningService.jpg';
import plumberService from '../../images/plumberService.jpg';
import Tvservices from '../../images/Tvservices.jpg';
import electrician from '../../images/electrician.jpg';
import elevatorService from '../../images/elevatorService.jpeg';
import fanRepairig from '../../images/fanRepairig.jpeg';
import IronMan from '../../images/IronMan.jpeg';
import mazdoor from '../../images/mazdoor.jpeg';
import painter from '../../images/painter.jpg';
import vehicleRepairing from '../../images/vehicleRepairing.jpeg';
import waterDispenserSer from '../../images/waterDispenserSer.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class ServiceCarousel extends Component {
    render() {
        return (
            <div className='owl-hide owl-carousel-back'><br /><br/>
            <h4 className='service-compnent-heading'>Our Services</h4><hr/><br />
                <OwlCarousel className="owl-theme" autoplay={10} items={5} loop margin={30} nav>
                    <div class="item">
                    <img src={AcrepairingService} className='owl-images' alt='Ac Repairing'/><p className='owl-text'>Ac Repairing</p>
                    </div>
                    <div class="item">
                    <img src={carpanterService} className='owl-images' alt='Carpanter'/><p className='owl-text'>Carpanter</p>
                    </div>
                    <div class="item">
                    <img src={homeAppliancesSercvice} className='owl-images' alt='Home Appliances'/><p className='owl-text'>Home Appliances</p>
                    </div>
                    <div class="item">
                    <img src={plumberService} className='owl-images' alt='Plumber'/><p className='owl-text'>
                    Plumber</p>
                    </div>
                    <div class="item">
                    <img src={Tvservices} className='owl-images' alt='Tv Services'/><p className='owl-text'>Tv Services</p>
                    </div>
                    <div class="item">
                    <img src={homeCleaningService} className='owl-images' alt='Home Cleaning'/><p className='owl-text'>Home Cleaning</p>
                    </div>
                    <div class="item">
                    <img src={electrician} className='owl-images' alt='Electrician'/> <p className='owl-text'>Electrician</p>
                    </div>
                    <div class="item">
                    <img src={elevatorService} className='owl-images' alt='Elevator'/><p className='owl-text'>Elevator</p>
                    </div>
                    <div class="item">
                    <img src={fanRepairig} className='owl-images' alt='Fan Repairing'/><p className='owl-text'>Fan Repairing</p>
                    </div>
                    <div class="item">
                    <img src={IronMan} className='owl-images' alt='Iron Man'/><p className='owl-text'>Iron Man</p>
                    </div>
                    <div class="item">
                    <img src={mazdoor} className='owl-images' alt='Mazdoor'/><p className='owl-text'>Mazdoor</p>
                    </div>
                    <div class="item">
                    <img src={painter} className='owl-images' alt='Painter'/><p className='owl-text'>Painter</p>
                    </div>
                    <div class="item">
                    <img src={vehicleRepairing} className='owl-images' alt='Vehicle Rep'/><p className='owl-text'>Vehicle Rep</p>
                    </div>
                    <div class="item">
                    <img src={waterDispenserSer} className='owl-images' alt='Water Dispenser'/><p className='owl-text'>Water Dispenser</p>
                    </div>
                   
                </OwlCarousel>
            </div>

        );
    }
}
export default ServiceCarousel;
