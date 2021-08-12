import Hero_Video from '../../assets/videos/Excel_Hero_v1.2.mp4';
import Goxl from '../../assets/images/g-goxl@2x.jpg';
import London from '../../assets/images/london@2x.jpg';
import Pilot from '../../assets/images/pilot@2x.jpg';
import Helicopter from '../../assets/images/helicopter.jpg';
import City from '../../assets/images/city.jpg';
import Work from '../../assets/images/work.jpg';
import { Button, ImageGroup, Image, Icon } from 'semantic-ui-react';
import './Homepage.css';
import { useLocomotiveScroll } from 'react-locomotive-scroll'


const Homepage = () => {
    const { scroll } = useLocomotiveScroll()
    return (
        <div data-scroll-section>
            <div className='hero-section' >
                <div className='header-segment'>
                    <h1 data-scroll data-scroll-direction='horizontal' data-scroll-speed='3' data-scroll-position='left'>Precision & excellence in the skies</h1>
                </div>
                <div className='video-container'>
                    <div className='video-overlay'></div>
                    <video autoPlay muted loop>
                        <source src={Hero_Video} />
                    </video>
                </div>
            </div>
            <div className='excel-content'>
                <div className='content'>
                    <p data-scroll data-scroll-speed='1' data-scroll-direction='vertical' data-scroll-delay='0.5' >Excel Helicopters provide charter flights from any UK. location. Whether business or pleasure, helicopter charter or private helicopter hire is the most time-efficient and memorable way to travel.</p>
                    <h2 data-scroll data-scroll-speed='-1' data-scroll-direction='vertical'>EXCEL HELICOPTER CHARTER</h2>
                </div>
            </div>
            <div className='excell-images'>
                <div className='images'>
                    <img src={Goxl} alt='' data-scroll data-scroll-speed='1.5' />
                    <img src={Pilot} alt='' data-scroll data-scroll-speed='-2' />
                    <img src={London} alt='' data-scroll data-scroll-speed='1' data-scroll-delay='0.5' />

                </div>
            </div>

            <div className='three-rows-section'>
                <div className='excell-offers'>
                    <div >

                        <h4 data-scroll data-scroll-speed='1.5' data-scroll-direction='horizontal' data-scroll-delay='0.3'>Business Charter</h4>
                        <div className='inner' data-scroll-delay='0.5' data-scroll data-scroll-speed='1' data-scroll-direction='horizontal'></div>

                        <p data-scroll data-scroll-speed='0.5' data-scroll-delay='0.7' data-scroll-direction='horizontal'>Excel Charter offers a sale, cost-effective and highly convenient point-to-point travel option</p>
                        <Button data-scroll data-scroll-speed='0' data-scroll-delay='0.9' data-scroll-direction='horizontal'>Read more</Button>

                    </div>

                </div>
                <div className='excell-offers'>
                    <div>

                        <h4 data-scroll data-scroll-speed='1.5' data-scroll-direction='horizontal' data-scroll-delay='0.3'>Private Hire</h4>
                        <div className='inner' data-scroll-delay='0.5' data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal'></div>

                        <p data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal' data-scroll-delay='0.7'> From short pleasure flights to large corporate events, Excel Charter have the range of helicopters and knowledge to cater for your requirements.</p>
                        <Button data-scroll data-scroll-speed='0' data-scroll-direction='horizontal' data-scroll-delay='0.9'>Read more</Button>

                    </div>
                </div>
                <div className='excell-offers'>
                    <div>

                        <h4 data-scroll data-scroll-speed='1' data-scroll-direction='horizontal' data-scroll-delay='0.3'>Airports Transfers </h4>
                        <div className='inner' data-scroll-delay='0.5' data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal'></div>

                        <p data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal' data-scroll-delay='0.7'>Excel Charter's fleet of Twin Squirrels and Augusta 109s, together with full-time pilots enable us to offer the onward helicopter transfer.</p>
                        <Button data-scroll data-scroll-speed='0' data-scroll-direction='horizontal' data-scroll-delay='0.9'>Read more</Button>

                    </div>
                </div>
            </div>

            <div className='gallery-container' >
                <Icon name="instagram" size="huge" data-scroll data-scroll-direction='horizontal' data-scroll-speed='1.5' />
                <div className='gallery'>

                    <ImageGroup size='medium'>

                        <Image src={Helicopter} data-scroll data-scroll-direction='horizontal' data-scroll-speed='1.5' />
                        <Image src={City} data-scroll data-scroll-direction='horizontal' data-scroll-speed='1' data-scroll-delay='0.5' />
                        <Image src={Work} data-scroll data-scroll-direction='horizontal' data-scroll-speed='0.5' />
                        <Image src={Helicopter} data-scroll data-scroll-direction='horizontal' data-scroll-speed='1' data-scroll-delay='0.5' />

                    </ImageGroup>
                </div>
            </div>

        </div>
    )

}

export default Homepage;