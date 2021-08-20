import Hero_Video from '../../assets/videos/Excel_Hero_v1.2.mp4';


const About = () => {


    return (
        <div data-scroll-section>
            <div className='hero-section' >
                <div className='header-segment'>
                    <h1 data-scroll data-scroll-direction='horizontal' data-scroll-speed='3' data-scroll-position='left'>Abous us</h1>
                </div>
                <div className='video-container'>
                    <div className='video-overlay'></div>
                    <video autoPlay muted loop>
                        <source src={Hero_Video} />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default About;