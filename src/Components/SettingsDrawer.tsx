import React, { useState } from "react";
import { SettingFilled } from "@ant-design/icons";
import { Drawer, DrawerProps } from "antd";
import { $ } from "../Scripts/helperFunctions";
import ToggleSwitch from "./Switch/ToggleSwitch";

const SettingsDrawer: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] =
        useState<DrawerProps["placement"]>("left");

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div
            id="settingsWrapper"
            className="icon-button-wrapper is-medium is-circle is-settings has-margin-left-auto has-margin-right-10"
        >
            <div
                id="settingsButton"
                className="icon-button has-text-default"
                onClick={showDrawer}
            >
                <SettingFilled />
            </div>
            <div id="settingsDrawerWrapper">
                <Drawer
                    title="Settings"
                    placement={placement}
                    closable={true}
                    onClose={onClose}
                    open={open}
                    key={placement}
                    keyboard={true}
                    afterOpenChange={() => {}}
                    className="background-main settings-drawer"
                >
                    <div style={{ height: "100%" }}>
                        <div>
                            <h3>
                                <span className="has-text-weight-bold has-text-default">
                                    Request Stats For:
                                </span>
                            </h3>
                        </div>
                        <div
                            id="statsSettingWrapper"
                            className="is-flex-column"
                            style={{
                                justifyContent: "space-between",
                                // height: "100%",
                                marginLeft: "25px",
                            }}
                        >
                            <div>
                                <ToggleSwitch
                                    label="Enable Motherboard Stats"
                                    labelIsLeft={false}
                                    ID="enableMotherboardToggle"
                                />
                            </div>
                            <div>
                                <ToggleSwitch
                                    label="Enable CPU Stats"
                                    labelIsLeft={false}
                                    ID="enableCPUToggle"
                                />
                            </div>
                            <div>
                                <ToggleSwitch
                                    label="Enabel GPU Stats"
                                    labelIsLeft={false}
                                    ID="enableGPUToggle"
                                />
                            </div>
                            <div>
                                <ToggleSwitch
                                    label="Enable RAM Stats"
                                    labelIsLeft={false}
                                    ID="enableRAMToggle"
                                />
                            </div>
                            <div>
                                <ToggleSwitch
                                    label="Enable Storage Stats"
                                    labelIsLeft={false}
                                    ID="enableStorageToggle"
                                />
                            </div>
                            <div>
                                <ToggleSwitch
                                    label="Enable Network Stats"
                                    labelIsLeft={false}
                                    ID="enableNetworkToggle"
                                />
                                <div>
                                    <h4 className="has-text-default">
                                        Network Stats:
                                    </h4>
                                    <div style={{ marginLeft: "25px" }}>
                                        <div>
                                            <ToggleSwitch
                                                label="Enable Wireless Stats"
                                                labelIsLeft={false}
                                                ID="enableWirelessToggle"
                                            />
                                        </div>
                                        <div>
                                            <ToggleSwitch
                                                label="Enable Ethernet Stats"
                                                labelIsLeft={false}
                                                ID="enableEthernetToggle"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default SettingsDrawer;
