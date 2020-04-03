import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';
import Menu from "./Menu";
import Page from "./Page";

class PageContainer extends React.Component {

    render() {
        const {currentPage, pages, selectPage} = this.props;
        return <div className={"page-container"}>
            <div className="page-menu">
                <Menu pages={pages} currentPage={currentPage} selectPage={selectPage}/>
            </div>
            <Page currentPage={currentPage}/>
        </div>
    }
}

PageContainer.propTypes = {
    currentPage: PropTypes.string.isRequired,
    pages: PropTypes.array.isRequired,
    selectPage: PropTypes.func.isRequired
};

export default PageContainer;