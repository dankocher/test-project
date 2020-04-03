import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';

class Page extends React.Component {

    render() {
        const {currentPage} = this.props;
        return (
            <div className={'page'}>
                {currentPage}
            </div>
        );
    }
}

Page.propTypes = {
    currentPage: PropTypes.string.isRequired
};

export default Page;