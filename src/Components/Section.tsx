import {BreadcrumbDivider, BreadcrumbSection, Icon, SemanticICONS} from "semantic-ui-react";
import '../Styles/BreadcrumbSection.css'
import {AppConstants} from "../Utils/AppConstants.ts";
import {useState} from "react";

interface BreadcrumbSectionComponentProps {
    icon: string;
    name: string;
    color: string;
    selected: boolean;
    position: "start" | "end" | "middle";
    small: boolean;
    previous: boolean;
    nextColor: string | null
}

export default function Section({
                                    icon,
                                    name,
                                    color,
                                    selected,
                                    position = "middle",
                                    small = false,
                                    previous = false,
                                    nextColor
                                }: BreadcrumbSectionComponentProps) {

    const [active, setActive] = useState(selected)

    const sectionStyle = {
        borderRadius: (position === "start") ? "6px 0px 0px 6px" : (position === "end") ? "0px 6px 6px 0px" : "",
        backgroundColor: active ? `${color}` : AppConstants.Colors.SilverGray,
        color: active ? "white" : AppConstants.Colors.EarlGray,
        minWidth: small && !active ? "50px" : "120px",
    }

    const dividerStyle = {
        backgroundColor: previous ? nextColor : AppConstants.Colors.SilverGray,
        margin: "0px"
    }

    const onMouseEnter = () => {
        setActive(true)
    }

    const onMouseLeave = () => {
        setActive(selected)
    }

    return (
        <>
            <BreadcrumbSection active={active} className="WorkflowStatusIndicator" style={sectionStyle}>
                <div className="StepIndicator" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Icon name={icon as SemanticICONS} size="large"/>
                    {small && !active ? null : <p style={{margin: 0}}>{name}</p>}
                </div>
            </BreadcrumbSection>
            {position !== "end" ?
                <BreadcrumbDivider className="divider" style={dividerStyle}>
                    <svg className="chevron"
                         xmlns="http://www.w3.org/2000/svg" width="5" height="28" viewBox="0 0 5 28"
                         fill={active ? color : AppConstants.Colors.SilverGray}>
                        <path d="M0 28V0L4.5 14L0 28Z"
                              stroke={active ? color : AppConstants.Colors.DarkGray}
                              style={{ strokeDasharray: '50', strokeDashoffset: -28}}/>
                    </svg>
                </BreadcrumbDivider>
                : null
            }
        </>

    )
}
