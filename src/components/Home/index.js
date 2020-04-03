import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';

class Home extends React.Component {

    render() {
        return <div className={"home"}>
            Home
        </div>
    }
}

Home.propTypes = {
    selectPage: PropTypes.func.isRequired
};

export default Home;