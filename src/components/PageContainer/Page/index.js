import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';
import ArticlePage from "../../ArticlePage";

class Page extends React.Component {

    render() {
        const {currentPage} = this.props;

        return (
            <div className={'page'}>
                <ArticlePage title={currentPage} />
            </div>
        );
    }
}

Page.propTypes = {
    currentPage: PropTypes.string.isRequired
};

export default Page;