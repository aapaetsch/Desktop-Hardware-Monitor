import React, { useState } from "react";
import { StatIndicatorLabelProps } from "../statIndicatorTypes";
import HorizontalIndicatorLabel from "./HorizontalStatIndicatorLabel";

export interface
export interface HorizontalStatIndicatorProps {
    currentValue: number;
    maxValue: number;
    minValue: number;
    color: string;
    labelLeft: StatIndicatorLabelProps | null;
    labelRight: StatIndicatorLabelProps | null;
    width: React.ReactPropTypes["number"] | React.ReactPropTypes["string"];
}
const HorizontalStatIndicator = (
    props: HorizontalStatIndicatorProps
): React.ReactElement => {
    const [currentValue, setCurrentValue] = useState(props.currentValue);
    // const [labelLeft, setLabelLeft] = useState(props.labelLeft);
    // const [labelRight, setLabelRight] = useState(props.labelRight);
    // setLabelLeft(props.labelLeft);
    // setLabelRight(props.labelRight);
    
    const getLabelFromProps = (isLeft: boolean): React.ReactElement | null => {
        if (isLeft && props.labelLeft == null || !isLeft && props.labelRight == null) {
            return null;
        }
        return (
            <HorizontalIndicatorLabel isLeft={isLeft} label={isLeft ? props.labelLeft : props.labelRight} />
        );
    };

    const labelLeft = getLabelFromProps(true);
    const labelRight = getLabelFromProps(false);

    const calculatePercent = () => {
        const percent = (props.maxValue - props.minValue) / props.currentValue;
        return percent * 100;
    }

    return (
        <div className="horizontal-stat-indicator-wrapper">
            {
                labelLeft
            }
            {
                labelRight
            }
            <div className="horizontal-stat-indicator"> // full width
                <div className="horizontal-track-active" style={{width: `${calculatePercent()}px` }}></div>
                <div className="horizontal-track-inactive" style={{width: `${100 - calculatePercent()}px`}}></div>
            </div>
        </div>
    );
};
