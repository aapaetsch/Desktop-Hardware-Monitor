import React from "react";
import { StatIndicatorLabelProps, Size } from "../statIndicatorTypes";
export interface HorizontalIndicatorLabelProps {
    isLeft: boolean;
    label: StatIndicatorLabelProps;
    labelSize?: Size;
}

const HorizontalIndicatorLabel = (
    props: HorizontalIndicatorLabelProps
): React.ReactElement => {
    const unitsSpan =
        props.label.units != null ? (
            <span className="horizontal-stat-label-units">
                {props.label.units.toString()}
            </span>
        ) : null;
    const getSizeClass = (): string => {
        switch (props.labelSize) {
            case Size.Small:
                return "is-small";
            case Size.Medium:
                return "is-medium";
            case Size.Large:
                return "is-large";
            default:
                return "";
        }
    };
    return (
        <div
            className={`horizontal-stat-indicator-label-${
                props.isLeft ? "left" : "right"
            } horizontal-stat-label ${getSizeClass()}`}
        >
            <span className="horizontal-stat-label-value">
                {props.label.value}
            </span>
            {unitsSpan}
        </div>
    );
};

export default HorizontalIndicatorLabel;
