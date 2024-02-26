import {Card, CardContent, CardHeader, CardMeta, Icon, SemanticICONS} from "semantic-ui-react";
import '../Styles/SideNavItem.css'
import React, {useState} from "react";

import classNames from "classnames";

interface SideNavItemProps {
    text: string;
    secondaryText?: string;
    color: string;
    icon: string;
    onSelect: () => void;
    onDelete: () => void;
}


export default function SideNavItem({text, secondaryText, color, icon, onSelect, onDelete}: SideNavItemProps) {
    const [hovering, setHovering] = useState<boolean>(false);
    const [selected, setSelected] = useState<boolean>(false)
    const onMouseEnter = () => {
        setHovering(true);
    }

    const onMouseLeave = () => {
        setHovering(false)
    }

    const handleDeleteClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onDelete();
    }

    const cardClass = classNames({
        "sideNavItem": true, "selectedBorder": selected, "unselectedBorder": !selected
    })

    const handleSelectClick = () => {
        setSelected(!selected)
        onSelect()
    }
    return (
        <Card className={cardClass} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <CardContent className="sideNavItemContent" onClick={handleSelectClick}>
                <div className="iconPanel" style={{backgroundColor: color}}>
                    <Icon className="elementIcon sideNavIcon" name={icon as SemanticICONS}/>
                </div>
                <div className="primaryContent">
                    <CardContent className="textContent text">
                        <CardHeader>
                            {text}
                        </CardHeader>
                        {secondaryText ?
                            <CardMeta className="secondaryText">
                                {secondaryText}
                            </CardMeta>
                            : null
                        }
                    </CardContent>
                    {hovering ?
                        <div className="trashPanel" onClick={handleDeleteClick}>
                            <Icon className="sideNavIcon" name="trash"/>
                        </div>
                        : null
                    }
                </div>
            </CardContent>
        </Card>
    )
}