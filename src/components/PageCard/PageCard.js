import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import './styles.scss';

export default class PageCard extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        style: PropTypes.object,
        onClick: PropTypes.func
    };

    render() {
        return (
            <div className='page-card'>

            </div>
        )
    }
}