import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';
import MenuItem from "../../MenuItem";

class Menu extends React.Component {

    render() {
        const {pages, selectPage, currentPage} = this.props;
        return (
            <div className={'menu'}>
                {
                    pages.map((page, i) => (
                        <MenuItem key={`menu-item-${i}`} title={page}
                                  onClick={() => selectPage(page)}
                                  selected={page === currentPage}
                                  height={50}
                        />
                    ))
                }
            </div>
        );
    }
}

Menu.propTypes = {
    pages: PropTypes.array.isRequired,
    currentPage: PropTypes.string.isRequired,
    selectPage: PropTypes.func.isRequired
};

export default Menu;