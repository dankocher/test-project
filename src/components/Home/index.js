import React from "react";
import './styles.scss';
import PropTypes from 'prop-types';
import PageCard from "../PageCard";

class Home extends React.Component {

    render() {
        const {pages, selectPage} = this.props;
        return <div className={"home"}>
            <div className="pages-card-container" style={{width: Math.sqrt(pages.length) * 202}}>
                {
                    pages.map((page, i) => (
                        <PageCard key={`page-${i}`} title={page} onClick={() => selectPage(page)}/>
                    ))
                }
            </div>
        </div>
    }
}

Home.propTypes = {
    selectPage: PropTypes.func.isRequired,
    pages: PropTypes.array.isRequired
};

export default Home;