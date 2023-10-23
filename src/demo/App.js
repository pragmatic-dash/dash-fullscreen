/* eslint no-magic-numbers: 0 */
import React, { Component } from 'react';

import { DashFullscreen } from '../lib';

class App extends Component {

    constructor(props) {
        super(props);
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashFullscreen
                    setProps={this.setProps}
                    style={{
                        height: '200px',
                        width: '200px',
                        backgroundColor: 'blue',
                    }}
                    {...this.state}
                >
                    <div style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'red',
                    }}></div>
                </DashFullscreen>
            </div>
        )
    }
}

export default App;
