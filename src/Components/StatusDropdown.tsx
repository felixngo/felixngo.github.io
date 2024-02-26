import {Dropdown, Icon, SemanticICONS} from "semantic-ui-react";
import {Status} from "./Breadcrumb.tsx";
import '../Styles/StatusDropdown.css'

import {useEffect, useState} from "react";

interface StatusDropdownProps {
    statuses: Status[];
    selectedIndex: number;
}

export default function StatusDropdown({statuses, selectedIndex}: StatusDropdownProps) {
    const [selected, setSelected] = useState(selectedIndex)

    const style = {
        backgroundColor: statuses[selected].color,
    }

    useEffect(() => {
        setSelected(selectedIndex)
    }, [selectedIndex]);

    const dropdownItems = statuses.map((status, index) => ({
        active: index===selected,
        key: status.name,
        text: status.name,
        value: index,
        icon: status.icon,
        onClick: () => setSelected(index)
    }))


    return (
        <Dropdown
            className="StatusDropdown"
            options={dropdownItems}
            defaultValue={selected}
            scrolling={true}
            icon={null}
            trigger={
                <div className="StatusDropdownTriggers">
                    <div className="iconDiv">
                        <Icon className="elementIcon" name={`${statuses[selected].icon as SemanticICONS}`}/>
                    </div>
                    <p className="dropdownText">{statuses[selected].name}</p>
                    <p className="dropdownText">|</p>
                    <div className="chevronIconDiv">
                        <Icon className="elementIcon" name='chevron down'/>
                    </div>
                </div>

            }
            style={style}
        >
        </Dropdown>
    )
}
