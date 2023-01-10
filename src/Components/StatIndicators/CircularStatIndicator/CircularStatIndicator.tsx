import {
    calculatePercent,
    getArcLength,
    getArcOffset,
} from "../../../Scripts/mathHelpers";
import React, { useState, useEffect } from "react";
import { ElementOrientation } from "../../GeneralComponentTypes";
import {
    FrequencyUnits,
    MagnitudeUnits,
    TemperatureUnits,
} from "../statIndicatorTypes";

export interface CircularStatIndicatorLabel {
    above?: string;
    below?: string;
    additionalClasses?: string;
    additionalAboveClasses?: string;
    additionalBelowClasses?: string;
}

export interface CircularStatIndicatorProps {
    percent?: number;
    value?: number;
    min?: number;
    max?: number;
    label?: CircularStatIndicatorLabel;
    units?: MagnitudeUnits | FrequencyUnits | TemperatureUnits;
    size: number;
    orientation?: ElementOrientation;
    shouldDisplayValue?: boolean;
    shouldDisplayUnits?: boolean;
}
// TODO: Add To React Store
const STROKE_WIDTH = 6;

/**
 * Returns the class name for the orientation of the stat indicator
 * @param orientation The orientation of the stat indicator
 * @returns The class name for the orientation of the stat indicator
 */
const getOrientationClass = (orientation: ElementOrientation): string => {
    switch (orientation) {
        case ElementOrientation.Top:
            return "is-top";
        case ElementOrientation.Bottom:
            return "is-bottom";
        case ElementOrientation.Left:
            return "is-left";
        case ElementOrientation.Right:
            return "is-right";
        default:
            return "is-right";
    }
};

/**
 * Calculates the percent from the props
 * -Either the percent is passed in, or the current value, min, and max are passed in.
 * @param percent The percent to calculate
 * @param currentValue The current value
 * @param min The minimum value
 * @param max The maximum value
 * @returns The calculated percent
 */
const calculatePercentFromProps = (
    percent: number | undefined,
    currentValue: number | null,
    min: number | null,
    max: number | null
): number => {
    if (percent == null) {
        return calculatePercent(currentValue, min, max);
    }
    return percent;
};

const getAdditionalClasses = (classes: string | undefined): string => {
    if (classes == null) {
        return "";
    }
    return classes;
};

const CircularStatIndicator = (props: CircularStatIndicatorProps) => {
    const cx_cy = props.size / 2;
    const svgCircleRadius = props.size / 3;
    const [dashArray, setDashArray] = useState(getArcLength(svgCircleRadius));

    const displayPercent = calculatePercentFromProps(
        props.percent,
        props.value,
        props.min,
        props.max
    );

    /**
     * Returns the circular stat indicator label element, can be used above or below the circular stat indicator
     */
    const getLabelElement = (label: string | null): JSX.Element => {
        if (label == null) {
            return null;
        }
        return (
            <span
                className={`circular-stat-label-value has-text-default has-text-size-small ${getAdditionalClasses(
                    props.label?.additionalClasses
                )}`}
            >
                {label}
            </span>
        );
    };

    return (
        <div
            className="circular-stat-indicator-wrapper"
            style={{
                width: props.size,
                height: props.size,
            }}
        >
            <div
                className="circular-stat-label-wrapper"
                style={{
                    width: props.size,
                    height: props.size,
                }}
            >
                <div className="circular-stat-value-wrapper is-small is-flex-column">
                    {props.label.above != null
                        ? getLabelElement(props.label.above)
                        : ""}
                    {props.shouldDisplayValue == true ||
                    props.shouldDisplayValue == null ? (
                        <span className="has-text-default has-text-size-small">
                            {displayPercent}
                            {props.units != null &&
                            (props.shouldDisplayUnits == true ||
                                props.shouldDisplayUnits == null)
                                ? props.units.toString()
                                : ""}
                        </span>
                    ) : (
                        ""
                    )}
                    {props.label.below != null
                        ? getLabelElement(props.label.below)
                        : ""}
                </div>
            </div>
            <svg
                viewBox={`0 0 ${props.size} ${props.size}`}
                className={`circular-stat-indicator-svg ${getOrientationClass(
                    props.orientation
                )}`}
            >
                <svg
                    className="circular-stat-indicator-svg-passive"
                    style={{ zIndex: 5 }}
                >
                    {/* Passive circle */}
                    <circle cx={cx_cy} cy={cx_cy} r={svgCircleRadius} />
                </svg>
                <svg
                    className="circular-stat-indicator-svg-active"
                    style={{ zIndex: 10 }}
                    strokeDasharray={dashArray}
                    strokeDashoffset={getArcOffset(
                        svgCircleRadius,
                        displayPercent,
                        dashArray
                    )}
                >
                    {/* Active circle */}
                    <circle cx={cx_cy} cy={cx_cy} r={svgCircleRadius} />
                </svg>
            </svg>
        </div>
    );
};

export default CircularStatIndicator;
