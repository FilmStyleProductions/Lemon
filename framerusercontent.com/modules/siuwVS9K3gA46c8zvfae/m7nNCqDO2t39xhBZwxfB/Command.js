let Component;
let IconInner;
var Icon = (React) => {
    if (!Component) {
        Component = /* @__PURE__ */ new Map([
            [
                "bold",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M180,140H164V116h16a40,40,0,1,0-40-40V92H116V76a40,40,0,1,0-40,40H92v24H76a40,40,0,1,0,40,40V164h24v16a40,40,0,1,0,40-40ZM164,76a16,16,0,1,1,16,16H164ZM60,76a16,16,0,0,1,32,0V92H76A16,16,0,0,1,60,76ZM92,180a16,16,0,1,1-16-16H92Zm24-64h24v24H116Zm64,80a16,16,0,0,1-16-16V164h16a16,16,0,0,1,0,32Z"
                }))
            ],
            [
                "duotone",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
                    "path", {
                        d: "M208,76h0a28,28,0,0,1-28,28H152V76a28,28,0,0,1,28-28h0A28,28,0,0,1,208,76ZM76,48h0A28,28,0,0,0,48,76h0a28,28,0,0,0,28,28h28V76A28,28,0,0,0,76,48ZM180,152H152v28a28,28,0,0,0,28,28h0a28,28,0,0,0,28-28h0A28,28,0,0,0,180,152ZM48,180h0a28,28,0,0,0,28,28h0a28,28,0,0,0,28-28V152H76A28,28,0,0,0,48,180Z",
                        opacity: "0.2"
                    }
                ), /* @__PURE__ */ React.createElement("path", {
                    d: "M180,144H160V112h20a36,36,0,1,0-36-36V96H112V76a36,36,0,1,0-36,36H96v32H76a36,36,0,1,0,36,36V160h32v20a36,36,0,1,0,36-36ZM160,76a20,20,0,1,1,20,20H160ZM56,76a20,20,0,0,1,40,0V96H76A20,20,0,0,1,56,76ZM96,180a20,20,0,1,1-20-20H96Zm16-68h32v32H112Zm68,88a20,20,0,0,1-20-20V160h20a20,20,0,0,1,0,40Z"
                }))
            ],
            [
                "fill",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M116,116h24v24H116ZM86,72a14,14,0,0,0,0,28h14V86A14,14,0,0,0,86,72Zm98,14a14,14,0,0,0-28,0v14h14A14,14,0,0,0,184,86ZM72,170a14,14,0,0,0,28,0V156H86A14,14,0,0,0,72,170ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-68,92V116h14a30,30,0,1,0-30-30v14H116V86a30,30,0,1,0-30,30h14v24H86a30,30,0,1,0,30,30V156h24v14a30,30,0,1,0,30-30Zm0,30a14,14,0,1,0,14-14H156Z"
                }))
            ],
            [
                "light",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M180,146H158V110h22a34,34,0,1,0-34-34V98H110V76a34,34,0,1,0-34,34H98v36H76a34,34,0,1,0,34,34V158h36v22a34,34,0,1,0,34-34ZM158,76a22,22,0,1,1,22,22H158ZM54,76a22,22,0,0,1,44,0V98H76A22,22,0,0,1,54,76ZM98,180a22,22,0,1,1-22-22H98Zm12-70h36v36H110Zm70,92a22,22,0,0,1-22-22V158h22a22,22,0,0,1,0,44Z"
                }))
            ],
            [
                "regular",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M180,144H160V112h20a36,36,0,1,0-36-36V96H112V76a36,36,0,1,0-36,36H96v32H76a36,36,0,1,0,36,36V160h32v20a36,36,0,1,0,36-36ZM160,76a20,20,0,1,1,20,20H160ZM56,76a20,20,0,0,1,40,0V96H76A20,20,0,0,1,56,76ZM96,180a20,20,0,1,1-20-20H96Zm16-68h32v32H112Zm68,88a20,20,0,0,1-20-20V160h20a20,20,0,0,1,0,40Z"
                }))
            ],
            [
                "thin",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M180,148H156V108h24a32,32,0,1,0-32-32v24H108V76a32,32,0,1,0-32,32h24v40H76a32,32,0,1,0,32,32V156h40v24a32,32,0,1,0,32-32ZM156,76a24,24,0,1,1,24,24H156ZM52,76a24,24,0,0,1,48,0v24H76A24,24,0,0,1,52,76Zm48,104a24,24,0,1,1-24-24h24Zm8-72h40v40H108Zm72,96a24,24,0,0,1-24-24V156h24a24,24,0,0,1,0,48Z"
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
var Command_default = Icon;
export {
    __FramerMetadata__,
    Command_default as
    default
};