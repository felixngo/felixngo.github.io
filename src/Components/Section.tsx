import {BreadcrumbDivider, BreadcrumbSection, Icon, SemanticICONS} from "semantic-ui-react";
import '../Styles/BreadcrumbSection.css'
import {AppConstants} from "../Utils/AppConstants.ts";

interface BreadcrumbSectionComponentProps {
    icon: string;
    name: string;
    color: string;
    position: "start" | "end" | "middle";
    small: boolean;
    nextColor: string | null
    activeIndexes: number[]
    index: number
    changeIndex: React.Dispatch<React.SetStateAction<number[]>>
}

export default function Section({
                                    icon,
                                    name,
                                    color,
                                    position = "middle",
                                    small = false,
                                    nextColor,
                                    activeIndexes,
                                    index,
                                    changeIndex
                                }: BreadcrumbSectionComponentProps) {

    const isActive = () => {
        return activeIndexes.includes(index)
    }

    const sectionStyle = {
        borderRadius: (position === "start") ? "6px 0px 0px 6px" : (position === "end") ? "0px 6px 6px 0px" : "",
        backgroundColor: isActive() ? `${color}` : AppConstants.Colors.SilverGray,
        color: isActive() ? "white" : AppConstants.Colors.EarlGray,
        minWidth: small && !isActive() ? "50px" : "120px"
    }

    const dividerStyle = {
        backgroundColor: activeIndexes.includes(index + 1) ? nextColor : AppConstants.Colors.SilverGray,
        margin: "0px"
    }

    const onMouseEnter = () => {
        changeIndex([activeIndexes[0], index]);
    }

    const onMouseLeave = () => {
        changeIndex([activeIndexes[0]]);
    }

    return (
        <>
            <BreadcrumbSection active={isActive()} className="WorkflowStatusIndicator" style={sectionStyle}>
                <div className="StepIndicator" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Icon name={icon as SemanticICONS} size="large"/>
                    {!small || isActive() || index - 1 == activeIndexes[0] ? <p style={{margin: 0}}>{name}</p> : null}
                </div>
            </BreadcrumbSection>
            {position !== "end" ?
                <BreadcrumbDivider className="dividerComponent" style={dividerStyle}>
                    <svg className="chevron"
                         xmlns="http://www.w3.org/2000/svg" width="5" height="28" viewBox="0 0 5 28"
                         fill={isActive() ? color : AppConstants.Colors.SilverGray}>
                        <path d="M0 28V0L4.5 14L0 28Z"
                              stroke={isActive() ? color : AppConstants.Colors.DarkGray}
                              style={{ strokeDasharray: '50', strokeDashoffset: -28}}/>
                    </svg>
                </BreadcrumbDivider>
                : null
            }
        </>

    )
}
