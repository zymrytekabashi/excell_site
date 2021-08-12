import Hero_Video from '../../assets/videos/Excel_Hero_v1.2.mp4';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Form, TextArea, Button } from 'semantic-ui-react';
import './Contact.css';
const Contact = () => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-section>
            <div className='hero-section' >
                <div className='header-segment'>
                    <h1 data-scroll data-scroll-direction='horizontal' data-scroll-speed='3' data-scroll-position='left'>Contact us</h1>
                </div>
                <div className='video-container'>
                    <div className='video-overlay'></div>
                    <video autoPlay muted loop>
                        <source src={Hero_Video} />
                    </video>
                </div>
            </div>

            <div className='contact-section'>
                <div className='contact-infos'>
                    <h4 data-scroll data-scroll-direction='horizontal' data-scroll-speed='1.5' data-scroll-delay='0.3'>Find us</h4>
                    <p data-scroll data-scroll-direction='horizontal' data-scroll-speed='1' data-scroll-delay='0.5'>Hangar 17, Stapleford Aerodrome,</p>
                    <p data-scroll data-scroll-direction='horizontal' data-scroll-speed='0.5' data-scroll-delay='0.7'>Stapleford Tawney Essex, RM4 1SJ</p>
                </div>
                <div className='contact-infos'>
                    <h4 data-scroll data-scroll-direction='horizontal' data-scroll-speed='1' data-scroll-delay='0.3' >Contact us</h4>
                    <p data-scroll data-scroll-direction='horizontal' data-scroll-speed='1' data-scroll-delay='0.5'>+44 01708688110 (24 hrs)</p>
                    <p data-scroll data-scroll-direction='horizontal' data-scroll-speed='0.5' data-scroll-delay='0.7'>info@excelhelicopters.co.uk</p>
                </div>
                <div className='contact-infos'>
                    <h4 data-scroll data-scroll-direction='horizontal' data-scroll-speed='1' data-scroll-delay='0.3'>Aoc No. Gb 2184</h4>
                    <p data-scroll data-scroll-direction='horizontal' data-scroll-speed='1' data-scroll-delay='0.5'>VAT number: 773 6059 08</p>
                    <p data-scroll data-scroll-direction='horizontal' data-scroll-speed='0.5' data-scroll-delay='0.7'>Company number: 411 0313</p>
                </div>
            </div>
            <div className='form-container'>
                <Form fluid >
                    <Form.Field >
                        <Form.Input placeholder='Name*' data-scroll data-scroll-direction='horizontal' data-scroll-speed='1' data-scroll-delay='0.3' />
                    </Form.Field>
                    <Form.Field className='input-field'  >
                        <Form.Input placeholder='Email*' data-scroll data-scroll-direction='horizontal' data-scroll-speed='1' data-scroll-delay='0.5' />
                    </Form.Field>
                    <Form.Field className='input-field' >
                        <Form.Input placeholder='Contact Number' data-scroll data-scroll-direction='horizontal' data-scroll-speed='1.5' data-scroll-delay='0.3' />
                    </Form.Field>
                    <Form.Field className='input-field' >
                        <TextArea placeholder="Message" data-scroll data-scroll-direction='horizontal' data-scroll-speed='2' dta-scroll-delay='0.3' />
                    </Form.Field>
                    <Button type='submit' data-scroll data-scroll-direction='horizontal' data-scroll-delay='1' data-scroll-speed='2.5' >Send</Button>
                </Form>
            </div>
        </div>
    )

}

export default Contact;