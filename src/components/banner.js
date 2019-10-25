import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Banner extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to Cricker Scorer!!</h1>
                    <hr className="my-3" />
                    <p className="lead">Record your Team score by simple way!!</p>
                </Jumbotron>
            </div>
        )
    }
}

export default Banner;