import 'semantic-ui-css/semantic.min.css'
import './Styles/App.css'
import BreadcrumbComponent from "./Components/Breadcrumb.tsx";
import {AppConstants} from "./Utils/AppConstants.ts";
import SideNavItem from "./Components/SideNavItem.tsx";
import {useState} from "react";

function App() {
    const prop = {
        statuses: [
            {
                icon: "clock",
                name: "Planning",
                color: AppConstants.Colors.RiverBed
            },
            {
                icon: "adjust",
                name: "In Progress",
                color: AppConstants.Colors.Yellow
            },
            {
                icon: "circle",
                name: "Work Complete",
                color: AppConstants.Colors.Orange
            },
            {
                icon: "users",
                name: "In Review",
                color: AppConstants.Colors.Purple
            },
            {
                icon: "user plus",
                name: "Awaiting Approval",
                color: AppConstants.Colors.Blue
            },
            {
                icon: "check circle",
                name: "Closed",
                color: AppConstants.Colors.Green
            }
        ],
        selected: 2
    }
    const [indexColor, setIndexColor] = useState<number>(0)
    const [showSideNav, setShowSideNav] = useState<boolean>(true)
    return (
        <div style={{padding: "20px", display: "flex", flexDirection: "column"}}>
            <BreadcrumbComponent statuses={prop.statuses} selected={prop.selected} />
            {showSideNav ?
                <SideNavItem
                    text="Planning"
                    secondaryText={"Secondary Text"}
                    color={prop.statuses[indexColor].color}
                    icon="check circle"
                    onSelect={() => {
                        setIndexColor((indexColor + 1) % prop.statuses.length)
                    }}
                    onDelete={() => {
                        setShowSideNav(false)
                    }}/>
                : null
            }
        </div>
    )
}

export default App
