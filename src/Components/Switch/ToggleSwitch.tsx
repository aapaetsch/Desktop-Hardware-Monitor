import React, { useEffect, useState } from "react";
import { Switch } from "antd";

export interface ToggleSwitchProps {
    onToggle?: (checked: boolean) => void;
    label?: string;
    labelIsLeft?: boolean;
    ID?: string;
}

const ToggleSwitch = (props: ToggleSwitchProps) => {
    const [checked, setChecked] = useState(false);
    let { onToggle } = props;
    if (onToggle == null) {
        const onChange = (checked: boolean) => {
            console.log("checked:", checked);
            setChecked(checked);
        };
        onToggle = onChange;
    }

    const createLabelEle = (label: string, isLeft: boolean) => {
        const labelEle = (
            <label
                onClick={() => onToggle(!checked)}
                className={`toggle-switch-label ${
                    isLeft ? "is-left" : "is-right"
                }`}
                id={`${props.ID}-label`}
            >
                {label}
            </label>
        );

        return labelEle;
    };

    return (
        <div className="toggle-switch-wrapper" id={`${props.ID}-wrapper`}>
            {
                // If the label is left, render it first
                props.label != null && props.labelIsLeft
                    ? createLabelEle(props.label, true)
                    : null
            }
            <Switch
                checked={checked}
                onChange={onToggle}
                className="toggle-switch"
                id={props.ID}
            />
            {props.label != null &&
            (props.labelIsLeft == null || props.labelIsLeft == false)
                ? createLabelEle(props.label, false)
                : null}
        </div>
    );
};

export default ToggleSwitch;
