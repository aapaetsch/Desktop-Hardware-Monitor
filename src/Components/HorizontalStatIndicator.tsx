import React, { useState } from 'react';

export interface HorizontalStatIndicatorProps {
    currentValue: React.ReactPropTypes['number'];
    maxValue: React.ReactPropTypes['number'];
    minValue: React.ReactPropTypes['number'];
    color: React.ReactPropTypes['string'];
    labelLeft: React.ReactPropTypes['string'];
    labelRight: React.ReactPropTypes['string'];
    width: React.ReactPropTypes['number'] | React.ReactPropTypes['string'];

}

function HorizontalStatIndicator(props: HorizontalStatIndicatorProps): React.ReactElement {
    
    return <div className="" >
        props.currentValue
    </div>;
}