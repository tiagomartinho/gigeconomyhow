import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Gig Economy</strong><span>.How</span></Link>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
