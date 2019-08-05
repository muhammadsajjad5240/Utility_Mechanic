import React,{Component} from 'react';
import adeelpic from '../../../images/adeelpic.jpg'
import bilalpic from '../../../images/bilalpic.jpg'
import sajjadpic from '../../../images/sajjadpic.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './ourMechanics.css';
class OurMechanics extends Component{
    render(){
        return(
            <div id='ourMechanics'  className='owl-hide owl-carousel-back'><br /><br/>
            <h4 className='service-compnent-heading'>Our Team</h4><hr/>
                <OwlCarousel className="owl-theme" autoplay={10} dots={true} autoplaySpeed={7500} items={5} loop={true} margin={20} nav>
                    <div class="item">
                    <img src={adeelpic} className='owl-images' alt='Adeel Ahmad'/><p className='owl-text'>Adeel Ahmad<br/>Documentation</p>
                    </div>
                    <div class="item">
                    <img src={bilalpic} className='owl-images' alt='Bilal Ahmad'/><p className='owl-text'>Bilal Ahmad <br />BackEnd</p>
                    </div>
                    <div class="item">
                    <img src={sajjadpic} className='owl-images' alt='Muhammad Sajjad'/><p className='owl-text'>Muhammad Sajjad <br />Front-End</p>
                    </div>
                    <br />
                </OwlCarousel><br /><br /><br />
            </div>
        );
    }
}
export default OurMechanics;