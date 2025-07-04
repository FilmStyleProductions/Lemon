let Component;
let IconInner;
var Icon = (React) => {
    if (!Component) {
        Component = /* @__PURE__ */ new Map([
            [
                "bold",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,164a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44V80a44.05,44.05,0,0,1,44-44h32a44.05,44.05,0,0,1,44,44ZM140,64v48a12,12,0,0,1-24,0V64a12,12,0,0,1,24,0Z"
                }))
            ],
            [
                "duotone",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
                    "path", {
                        d: "M200,80v96a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56V80a56,56,0,0,1,56-56h32A56,56,0,0,1,200,80Z",
                        opacity: "0.2"
                    }
                ), /* @__PURE__ */ React.createElement("path", {
                    d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,160a48.05,48.05,0,0,1-48,48H112a48.05,48.05,0,0,1-48-48V80a48.05,48.05,0,0,1,48-48h32a48.05,48.05,0,0,1,48,48ZM136,64v48a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Z"
                }))
            ],
            [
                "fill",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm-8,96a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Z"
                }))
            ],
            [
                "light",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,158a50.06,50.06,0,0,1-50,50H112a50.06,50.06,0,0,1-50-50V80a50.06,50.06,0,0,1,50-50h32a50.06,50.06,0,0,1,50,50ZM134,64v48a6,6,0,0,1-12,0V64a6,6,0,0,1,12,0Z"
                }))
            ],
            [
                "regular",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,160a48.05,48.05,0,0,1-48,48H112a48.05,48.05,0,0,1-48-48V80a48.05,48.05,0,0,1,48-48h32a48.05,48.05,0,0,1,48,48ZM136,64v48a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Z"
                }))
            ],
            [
                "thin",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,156a52.06,52.06,0,0,1-52,52H112a52.06,52.06,0,0,1-52-52V80a52.06,52.06,0,0,1,52-52h32a52.06,52.06,0,0,1,52,52ZM132,64v48a4,4,0,0,1-8,0V64a4,4,0,0,1,8,0Z"
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
var MouseSimple_default = Icon;
export {
    __FramerMetadata__,
    MouseSimple_default as
    default
};