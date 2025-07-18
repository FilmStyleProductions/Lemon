let Component;
let IconInner;
var Icon = (React) => {
    if (!Component) {
        Component = /* @__PURE__ */ new Map([
            [
                "bold",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm40.49-84.49a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17L116,139V88a12,12,0,0,1,24,0v51l11.51-11.52A12,12,0,0,1,168.49,127.51Z"
                }))
            ],
            [
                "duotone",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                    opacity: "0.2"
                }), /* @__PURE__ */ React.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"
                }))
            ],
            [
                "fill",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,117.66-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z"
                }))
            ],
            [
                "light",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm36.24-86.24a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,153.51V88a6,6,0,0,1,12,0v65.51l21.76-21.75A6,6,0,0,1,164.24,131.76Z"
                }))
            ],
            [
                "regular",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"
                }))
            ],
            [
                "thin",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm34.83-86.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,158.34V88a4,4,0,0,1,8,0v70.34l25.17-25.17A4,4,0,0,1,162.83,133.17Z"
                }))
            ]
        ]);
        IconInner = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", {
            ref,
            ...props
        }, Component.get(props.weight)));
    }
    return IconInner;
};
const __FramerMetadata__ = {
    exports: {
        default: {
            type: "reactComponent",
            slots: [],
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
var ArrowCircleDown_default = Icon;
export {
    __FramerMetadata__,
    ArrowCircleDown_default as
    default
};