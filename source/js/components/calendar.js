import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';
import {routeCodes} from '../routes';

export default class Calendar extends Component {

    render() {
        return (
            <div>
                yoho moi je suis the calendar

                <div className="container">
                    <div className="row seven-cols">
                        {/*<div className="col-md-1">Col 1</div>*/}
                        {/*<div className="col-md-1">Col 2</div>*/}
                        {/*<div className="col-md-1">Col 3</div>*/}
                        <div className="col-md-3">Col 4</div>
                        <div className="col-md-3">Col 5</div>
                        <div className="col-md-3">Col 6</div>
                        <div className="col-md-3">Col 7</div>
                    </div>
                </div>
            </div>

        );
    }
}
