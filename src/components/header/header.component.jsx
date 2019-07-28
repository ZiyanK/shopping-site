import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import { auth } from 'firebase';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    Sign Out 
                </div>
            ): (
                <div className='option' to='/signin'>
                    Sing In
                </div>
            )}
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);