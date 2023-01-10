import React from "react";
import { StatIndicatorLabelProps } from "../statIndicatorTypes";
import HorizontalIndicatorLabel from "./HorizontalStatIndicatorLabel";

export interface HorizontalStatIndicatorProps {
    currentValue: number;
    maxValue: number;
    minValue: number;
    activeColorClass?: string;
    labelLeft?: StatIndicatorLabelProps | null;
    labelRight?: StatIndicatorLabelProps | null;
    width?: number;
    hasLabelsAbove?: boolean;
}

const HorizontalStatIndicator = (
    props: HorizontalStatIndicatorProps
): React.ReactElement => {
    const getLabelFromProps = (isLeft: boolean): React.ReactElement | null => {
        if (
            (isLeft && props.labelLeft == null) ||
            (!isLeft && props.labelRight == null)
        ) {
            return null;
        }
        return (
            <HorizontalIndicatorLabel
                isLeft={isLeft}
                label={isLeft ? props.labelLeft : props.labelRight}
                labelSize={
                    isLeft ? props.labelLeft?.size : props.labelRight?.size
                }
            />
        );
    };

    const labelLeft = getLabelFromProps(true);
    const labelRight = getLabelFromProps(false);
    const labelsAbove =
        props.hasLabelsAbove != null ? props.hasLabelsAbove : true;
    /**
     * Returns the labels element if shouldReturnLabelsElement is true
     * @param shouldReturnLabelsElement
     * @returns
     */
    const getLabelsElement = (shouldReturnLabelsElement: boolean) => {
        if (shouldReturnLabelsElement) {
            return (
                <div className={`horizontal-stat-label-wrapper`}>
                    {labelLeft}
                    {labelRight}
                </div>
            );
        }
    };

    const calculatePercent = () => {
        const percent = props.currentValue / (props.maxValue - props.minValue);
        return percent * 100;
    };
    const percent = calculatePercent();

    return (
        <div
            className="horizontal-stat-indicator-wrapper"
            style={{ width: props.width != null ? `${props.width}px` : "100%" }}
        >
            {getLabelsElement(labelsAbove)}
            <div className="horizontal-stat-indicator">
                <div
                    className={`horizontal-track-active ${
                        props.activeColorClass != null
                            ? props.activeColorClass
                            : ""
                    }`}
                    style={{ width: `${percent}%` }}
                ></div>
                <div
                    className="horizontal-track-inactive"
                    style={{ width: `${100 - percent}%` }}
                ></div>
            </div>
            {getLabelsElement(!labelsAbove)}
        </div>
    );
};

export default HorizontalStatIndicator;
