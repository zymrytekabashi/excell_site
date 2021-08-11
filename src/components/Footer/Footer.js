
import { Grid, Icon, Image, Form, List, Segment } from 'semantic-ui-react';
import './Footer.css';
import Logo from '../../assets/images/excel_logo_white.svg';
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Footer = () => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div className='footer-container' data-scroll-section>
            <Grid columns='equal' className='footer-grid'>
                <Grid.Row stretched >
                    <Grid.Column data-scroll>
                        <Segment> <Image data-scroll data-scroll-speed='1.5' data-scroll-direction='vertical' src={Logo} alt='' className='footer-logo' />
                        </Segment>
                        <Segment data-scroll data-scroll-speed='1.5' data-scroll-direction='vertical'><p  >Hangar 17, Stapleford Aerodrome,</p>
                            <p  >Stapleford Tawney, Essex, RM4 1SJ</p></Segment>
                        <Segment className='footer-icons' data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal'>
                            <Icon name="twitter" />
                            <Icon name="facebook f" />
                            <Icon name="linkedin" />
                            <Icon name="instagram" /></Segment>
                    </Grid.Column>
                    <Grid.Column >
                        <Segment ></Segment>
                        <Segment></Segment>
                        <Segment>
                            <p data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal' >+44 01708 688110 (24 hrs)</p>
                            <p data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal' >info@excelhelicopters.co.uk</p>

                        </Segment>
                        <Segment>

                            <p data-scroll data-scroll-speed='0.5' data-scroll-direction='horizontal' >©2021 Excel Helicopters Limited. All rights reserved.</p>
                            <p data-scroll data-scroll-speed='0.5' data-scroll-delay='1' data-scroll-direction='horizontal' >Website by Future</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column >
                        <Segment>
                            <Form>
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
                        </Segment>
                        <Segment data-scroll data-scroll-speed='1.5' data-scroll-direction='vertical'>
                            <List items={['HOME', 'ABOUT US', 'CONTACT', 'CHARTER', 'SPECIAL OPERATIONS', 'MAINTENANCE & ENGINEERING', 'SALES', 'MANAGEMENT', 'PILOT TRAAINING', 'OUR FLEET']} />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

            </Grid>

        </div>
    )
}

export default Footer;