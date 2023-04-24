import React from 'react'
import { Link } from 'react-router-dom'
import './component.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';


const Header = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    

    return (
        <>


            <div className="nav-container">
                <div className='nav-title'><span>Let's Chat</span></div>
                <div className='nav-options'><span><Link to="/">Home</Link></span>
                    <span><Link to="/about">About</Link></span>
                    <span><Link to="/contact">Contact</Link></span>
                    {!isAuthenticated && <button className='nav-button' onClick={() => loginWithRedirect()}>Log In</button>
                    }
                    {isAuthenticated && <><Button
                        id="PopoverFocus"
                        type="button"
                        className='profile-button'
                    >
                        <img className='profile-pic' src={user.picture} alt={user.name} />
                    </Button>
                        <UncontrolledPopover
                            placement="bottom"
                            target="PopoverFocus"
                            trigger="focus"
                        >
                            <PopoverBody>
                                <h5>{user.name}</h5>
                                <p>{user.email}</p>
                            </PopoverBody>
                            <PopoverHeader onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                <div className='d-flex justify-content-center cursor-pointer'><span>Logout</span></div>
                            </PopoverHeader>

                        </UncontrolledPopover></>}
                </div>

            </div>
        </>
    )
}

export default Header