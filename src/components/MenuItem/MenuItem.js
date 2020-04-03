import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class MenuItem extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        style: PropTypes.object,
        titleStyle: PropTypes.object,
        onClick: PropTypes.func,
        className: PropTypes.string,
        selected: PropTypes.bool,
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
        const {title, className, style, width, height, selected, titleStyle} = this.props;


        return (
            <div className={`menu-item${selected ? ' -selected' : ''}${className ? ` ${className}` : ''}`} onClick={this.onClick} style={{width, height, ...style}}>
                <span style={titleStyle}>{title}</span>
            </div>
        )
    }
}