import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "./style.css";

const MyFullScreen = (props) => {
    const handler = useFullScreenHandle()
    return (
        <>
            <button className="fullscreen-button" onClick={handler.enter}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <FullScreen className="simple-fullscreen" handle={handler}>
                {props.children}
            </FullScreen>
        </>
    )
}

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashFullscreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { id, children, style } = this.props;
        const mergedStyle = { ...style, "position": "relative" };
        return (
            <div style={mergedStyle} id={id || ''}>
                <MyFullScreen>
                    {children}
                </MyFullScreen>
            </div>
        );
    }

}

DashFullscreen.defaultProps = {
    style: {}
};

DashFullscreen.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The children of this component
     */
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.array,
      ]),

    /**
     * The style of this component
     */
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
