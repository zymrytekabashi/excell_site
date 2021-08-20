import { Menu, Segment, Icon, Dropdown } from 'semantic-ui-react';
import { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/images/excel_logo_white.svg';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='navbar-container'>
            <Segment inverted onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}  >
                <Dropdown className='link item' open={isOpen} fluid >
                    <Dropdown.Menu>
                        <Dropdown.Item>Charts</Dropdown.Item>
                        <Dropdown.Item>Special Operations</Dropdown.Item>
                        <Dropdown.Item>Maintance & Engineering</Dropdown.Item>
                        <Dropdown.Item>Sales</Dropdown.Item>
                        <Dropdown.Item>Management</Dropdown.Item>
                        <Dropdown.Item>Pilot Training</Dropdown.Item>
                        <Dropdown.Item>Our fleet</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu inverted pointing secondary className='menu' fixed >
                    <img src={Logo} alt='' width="150" />

                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='home'
                            as={NavLink} to='/' exact
                        />
                        <Menu.Item
                            name='about'

                        />
                        <Menu.Item
                            name='contact'

                        />
                    </Menu.Menu>

                    <Menu.Menu position='right' icon >
                        <Menu.Item>
                            <Icon name='twitter' />
                        </Menu.Item>
                        <Menu.Item name='facebook' >
                            <Icon name='facebook f' />
                        </Menu.Item>
                        <Menu.Item name='linkedin' >
                            <Icon name='linkedin' />
                        </Menu.Item>
                        <Menu.Item name='instagram' >
                            <Icon name='instagram' />
                        </Menu.Item>

                    </Menu.Menu>
                </Menu>

            </Segment>
        </div>
    )
}

export default Navbar;