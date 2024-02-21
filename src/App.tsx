import 'semantic-ui-css/semantic.min.css'
import BreadcrumbComponent from "./Components/Breadcrumb.tsx";

function App() {


  const prop = {
    statuses: [
      {
        icon: "clock",
        name: "Planning",
        color: "#414E5B"
      },
      {
        icon: "sun",
        name: "Doing",
        color: "#ebdb34"
      },
      {
        icon: "checkmark",
        name: "Done",
        color: "#74eb34"
      },
      {
        icon: "checkmark",
        name: "Done",
        color: "Purple"
      }
    ],
    selected: 1
  }

  return (
    <div>
      <BreadcrumbComponent statuses={prop.statuses} selected={prop.selected} />
    </div>
  )
}

export default App
