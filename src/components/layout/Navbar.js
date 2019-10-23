import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLInks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">
          SkyHigh
        </Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default Navbar;