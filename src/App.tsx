import 'semantic-ui-css/semantic.min.css'
import BreadcrumbComponent from "./Components/Breadcrumb.tsx";
import {AppConstants} from "./Utils/AppConstants.ts";

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
        name: "InReview",
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

  return (
    <div>
      <BreadcrumbComponent statuses={prop.statuses} selected={prop.selected} />
    </div>
  )
}

export default App
