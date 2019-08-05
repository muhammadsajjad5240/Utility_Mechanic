import React,{Component} from 'react';
import './feedBack.css';
import AcrepairingService from '../../../images/AcrepairingService.jpg';
import carpanterService from '../../../images/carpanterService.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class FeedBack extends Component{
    render(){
        return(
            <div id='feedBack'   className='owl-hide owl-carousel-back'><br />
                <h4 className='service-compnent-heading'>Clients FeedBack</h4><hr/><br />
                <OwlCarousel className="owl-theme" autoplay={10} dots={false} items={2} loop={true} margin={30} nav>
                    <div class="item">
                    <img src={AcrepairingService} className='owl-images' alt='Ac Repairing'/><p className='owl-text'>Ac Repairing</p>
                    </div>
                    <div class="item">
                    <img src={carpanterService} className='owl-images' alt='Carpanter'/><p className='owl-text'>Carpanter</p>
                    </div>
                   
                    <br />
                </OwlCarousel>
            </div>
        );
    }
}
export default FeedBack;