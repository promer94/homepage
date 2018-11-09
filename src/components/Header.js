import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon">
               
                <a href="https://github.com/promer94" className="devicon-github-plain-wordmark"></a>
               
            </span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>许一旋</h1>
                <h2>Web developer</h2>
            </div>
        </div>
        <nav>
        <ul>
            <li><i className="devicon-javascript-plain"></i></li>
            <li><i className="devicon-nodejs-plain"></i></li>
            <li><i className="devicon-react-plain"></i></li>
            <li><i className="devicon-d3js-plain"></i></li>
          </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
