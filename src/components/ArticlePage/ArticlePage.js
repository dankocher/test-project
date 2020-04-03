import React, {Component} from 'react';
import './styles.scss';
import PropTypes from "prop-types";
import { LoremIpsum } from 'react-lorem-ipsum';

export default class ArticlePage extends Component{

    static propTypes = {
        title: PropTypes.string,
        text: PropTypes.string,
        className: PropTypes.string,
        mainStyle: PropTypes.object,
        titleStyle: PropTypes.object,
        textStyle: PropTypes.object
    };

    render() {
        const {className, text, title, mainStyle, titleStyle, textStyle} = this.props;

        return (
            <div className={`article-page${className ? ` ${className}` : ''}`} style={mainStyle}>
                <div className='ap-title' style={titleStyle}>{title}</div>
                <div className='ap-text' style={textStyle}>
                    {
                        text ||
                        <LoremIpsum
                            p={20}
                            avgWordsPerSentence={10}
                            avgSentencesPerParagraph={16}
                            startWithLoremIpsum={false}
                        />
                    }
                </div>
            </div>
        )
    }
}