import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import './styles.scss';

export default class PageCard extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        style: PropTypes.object,
        onClick: PropTypes.func,
        className: PropTypes.string
    };

    render() {
        const {title, className} = this.props;

        return (
            <div className={`page-card${className ? ` ${className}` : ''}`}>
                {title}
            </div>
        )
    }
}