
import { Grid, Icon, Image, Form, List, Segment } from 'semantic-ui-react';
import './Footer.css';
import Logo from '../../assets/images/excel_logo_white.svg';
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Footer = () => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div className='footer-container' data-scroll-section>
            <div className="footer-content">
                <div className='row'>
                    <div className='logo-container'>
                        <Image data-scroll data-scroll-speed='1.5' data-scroll-direction='vertical' src={Logo} alt='' className='footer-logo' />

                    </div>
                    <div className='subscribe-form'><Form>
                        <Form.Group>
                            <Form.Field>
                                <label data-scroll data-scroll-speed='1' data-scroll-direction='horizontal' >Subscribe to our Newsletter</label>
                                <div data-scroll data-scroll-speed='1' data-scroll-direction='horizontal' className="ui action input">
                                    <input type="text" className='subscribe-input' />
                                    <div className="ui button" >Subscribe</div>
                                </div>
                            </Form.Field>
                        </Form.Group>
                    </Form>
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <p  >Hangar 17, Stapleford Aerodrome,</p>
                        <p  >Stapleford Tawney, Essex, RM4 1SJ</p>
                        <br /><br />
                        <div className='footer-icons'>
                            <Icon name="twitter" />
                            <Icon name="facebook f" />
                            <Icon name="linkedin" />
                            <Icon name="instagram" />
                        </div>
                    </div>
                    <div className='column'>
                        <p data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal' >+44 01708 688110 (24 hrs)</p>
                        <p data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal' >info@excelhelicopters.co.uk</p>
                        <br /><br />
                        <p data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal' >©2021 Excel Helicopters Limited. All rights reserved.</p>
                        <p data-scroll data-scroll-speed='0.5' data-scroll-delay='1' data-scroll-direction='horizontal'>Website by Future</p>
                    </div>
                    <div className='column'>
                        <ul className='menu-footer' data scroll data-scroll-direction='horizontal' data-scroll-speed='3' data-scroll-delay='0.5'><li>Home</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Charter</li>
                            <li>Special Operations</li>
                            <li>Maintance & Engineering</li>
                            <li>Sales</li>
                            <li>Management</li>
                            <li>Pilot Training</li>
                            <li>Our Fleet</li>
                        </ul>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Footer;