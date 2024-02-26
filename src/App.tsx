import 'semantic-ui-css/semantic.min.css'
import './Styles/App.css'
import BreadcrumbComponent from "./Components/Breadcrumb.tsx";

import SideNavItem from "./Components/SideNavItem.tsx";
import {useState} from "react";
import {AppConstants} from "./Utils/AppConstants.ts";

function App() {
    const [index, setIndex] = useState<number>(0)
    const [showSideNav, setShowSideNav] = useState<boolean>(true)

    const statuses = [
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
    ];


    return (
        <div style={{padding: "20px", display: "flex", flexDirection: "column"}}>
            <BreadcrumbComponent statuses={statuses} selected={index}/>
            {showSideNav ?
                <SideNavItem
                    text={statuses[index].name}
                    secondaryText={"Secondary Text"}
                    color={statuses[index].color}
                    icon={statuses[index].icon}
                    onSelect={() => {
                        setIndex((index + 1) % statuses.length)
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
