import {Card, CardContent, CardHeader, CardMeta, Icon, SemanticICONS} from "semantic-ui-react";
import '../Styles/SideNavItem.css'

interface SideNavItemProps {
    text: string;
    secondaryText?: string;
    color: string;
    icon: string;
    onSelect: () => void;
    onDelete: () => void;
}


export default function SideNavItem({text, secondaryText, color, icon, onSelect, onDelete}: SideNavItemProps) {
    return (

        <Card className="sideNavItem">
            <CardContent className="sideNavItemContent">
                <div className="iconPanel">
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
                    <div className="trashPanel">
                        <Icon className="sideNavIcon" name="trash"/>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}