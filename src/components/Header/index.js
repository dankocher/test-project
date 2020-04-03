import React from "react";
import './styles.scss';
import logo from './logo.svg';
import PropTypes from 'prop-types';

class Header extends React.Component {

    render() {
        return <header>
            <div className="home-button" onClick={this.props.onClick}>
                <img src={logo} width={80} alt={"Test project"}/>
                <span className={'title'}>Test Project</span>
            </div>
        </header>
    }
}

Header.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Header;