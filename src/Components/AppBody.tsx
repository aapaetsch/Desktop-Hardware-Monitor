import React from "react";
import HorizontalStatIndicator from "./StatIndicators/HorizontalStatIndicator/HorizontalStatIndicator";
import { FrequencyUnits } from "./StatIndicators/statIndicatorTypes";

const AppBody: React.FC = () => {
    const [computerStat1, setComputerStat1] = React.useState(4800);
    setTimeout(() => {
        if (computerStat1 === 0) {
            setComputerStat1(4800);
        } else {
            setComputerStat1(computerStat1 - 100);
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
        </div>
    );
};
export default AppBody;
