import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class PageCard extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        style: PropTypes.object,
        onClick: PropTypes.func,
        className: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number
    };

    onClick = () => {
        const {onClick} = this.props;

        if (onClick) {
            onClick()
        }
    };

    render() {
        const {title, className, style, width, height} = this.props;

        return (
            <div className={`page-card${className ? ` ${className}` : ''}`} onClick={this.onClick} style={{width, height, ...style}}>
                {title}
            </div>
        )
    }
}