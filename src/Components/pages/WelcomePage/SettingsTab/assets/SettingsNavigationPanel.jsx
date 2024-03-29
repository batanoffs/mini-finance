import { Tabs } from "antd";
import { ProfileTab } from "./SettingsProfileTab";
import { PasswordTab } from "./SettingsPasswordTab";
import { NotificationTab } from "./SettingsNotificationTab";
import { VirtualCard } from "./SettingsVirtualCardTab";

export const SettingsNavigationPanel = () => {
    const onChange = (key) => {
    };
    const items = [
        {
            key: "1",
            label: "Профил",
            children: <ProfileTab/>,
        },
        {
            key: "2",
            label: "Парола",
            children: <PasswordTab />,
        },
        {
            key: "3",
            label: "Известия",
            children: <NotificationTab />,
        },
        {
            key: "4",
            label: "Карта",
            children: <VirtualCard />,
        },
    ];
    return (
        <Tabs defaultActiveKey="1" items={items} tabBarStyle={{fontFamily: "var(--body-font-family)"}}onChange={onChange} />
    );
};