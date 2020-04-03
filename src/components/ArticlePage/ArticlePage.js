import React, {Component} from 'react';
import './styles.scss';
import PropTypes from "prop-types";

export default class ArticlePage extends Component{

    static propTypes = {
        title: PropTypes.string,
        text: PropTypes.string,
        className: PropTypes.string
    };

    render() {
        const {className, text, title} = this.props;

        return (
            <div className={`article-page${className ? ` ${className}` : ''}`}>
                <div>{title}</div>
                <div>{text}</div>
            </div>
        )
    }
}