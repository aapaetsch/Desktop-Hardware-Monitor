import React from "react";
import { StatIndicatorLabelProps } from "../statIndicatorTypes";
export interface HorizontalIndicatorLabelProps {
    isLeft: boolean;
    label: StatIndicatorLabelProps;
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

    return (
        <div
            className={`horizontal-stat-indicator-label-${
                props.isLeft ? "left" : "right"
            }`}
        >
            <span className="horizontal-stat-label-value">
                {props.label.value}
            </span>
            {unitsSpan}
        </div>
    );
};

export default HorizontalIndicatorLabel;
