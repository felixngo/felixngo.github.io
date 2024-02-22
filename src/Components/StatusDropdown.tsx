import {Dropdown, Icon, SemanticICONS} from "semantic-ui-react";
import {Status} from "./Breadcrumb.tsx";
import '../Styles/StatusDropdown.css'

import {useState} from "react";

interface StatusDropdownProps {
    statuses: Status[];
    selectedIndex: number;
}

export default function StatusDropdown({statuses, selectedIndex}: StatusDropdownProps) {
    const [selected, setSelected] = useState(selectedIndex)

    const style = {
        backgroundColor: statuses[selected].color,
    }

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
                <div className="StatusDropdown">
                    <div className="iconDiv">
                        <Icon className="iconDropdown" name={`${statuses[selected].icon as SemanticICONS}`}/>
                    </div>
                    <p className="dropdownText">{statuses[selected].name}</p>
                    <p className="dropdownText">|</p>
                    <Icon className="iconDropdown" name='chevron down'/>
                </div>

            }
            style={style}
        >
        </Dropdown>
    )
}
