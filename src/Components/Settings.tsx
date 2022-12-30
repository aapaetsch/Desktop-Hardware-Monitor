import React, { useState } from "react";
import { SettingFilled } from "@ant-design/icons";
import { Drawer, DrawerProps } from "antd";
import { $ } from "../Scripts/helperFunctions";

const Settings: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right')
    
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };



    return <div id="settingsWrapper" className="icon-button-wrapper is-medium is-circle is-settings has-margin-left-auto has-margin-right-10">
        <div id="settingsButton" className="icon-button has-text-default" onClick={showDrawer}>
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
                afterOpenChange={() => {
                    const drawerBody = document.querySelector('.settings-drawer');
                    drawerBody.querySelector('.ant-drawer-title').insertAdjacentHTML('afterend', '<span class="settings-drawer-close-button">Hello World</span>');
                }}
                className="background-main settings-drawer">

            </Drawer>
        </div>
        
    </div>
}

export default Settings;