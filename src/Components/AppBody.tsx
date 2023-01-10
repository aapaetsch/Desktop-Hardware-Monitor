import React from "react";
import { ElementOrientation } from "./GeneralComponentTypes";
import CircularStatIndicator from "./StatIndicators/CircularStatIndicator/CircularStatIndicator";
import HorizontalStatIndicator from "./StatIndicators/HorizontalStatIndicator/HorizontalStatIndicator";
import {
    FrequencyUnits,
    MagnitudeUnits,
} from "./StatIndicators/statIndicatorTypes";

const AppBody: React.FC = () => {
    const [computerStat1, setComputerStat1] = React.useState(4800);
    const [percentStat, setPercentStat] = React.useState(100);
    setTimeout(() => {
        if (computerStat1 === 0) {
            setComputerStat1(4800);
        } else {
            setComputerStat1(computerStat1 - 100);
        }
        if (percentStat === 0) {
            setPercentStat(100);
        } else {
            setPercentStat(percentStat - 5);
        }
    }, 1000);
    return (
        <div id="appBody" className="background-main">
            <HorizontalStatIndicator
                currentValue={computerStat1}
                minValue={0}
                maxValue={4800}
                activeColorClass="is-primary"
                width={window.innerWidth / 3}
                labelLeft={{ value: "Core #1", units: null }}
                labelRight={{
                    value: computerStat1,
                    units: FrequencyUnits.MegaHertz,
                }}
                hasLabelsAbove={false}
            />
            <CircularStatIndicator
                percent={percentStat}
                size={90}
                orientation={ElementOrientation.Top}
                units={MagnitudeUnits.Percent}
                label={{
                    above: "Hello",
                    additionalAboveClasses: "has-text-tiny",
                }}
            />
        </div>
    );
};
export default AppBody;
