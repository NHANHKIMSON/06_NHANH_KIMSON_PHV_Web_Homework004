
import { useState } from "react";
import "./App.css";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import CardComponent from "./components/CardComponent";

function App() {
  const[cards, setCards] = useState([]);
  const handleSubmitProject = (projects) => {
    // setCards([...cards, projects]);
    setCards((prevCards) =>[...prevCards, projects]);
  }
  console.log("Card: ", cards);
  return (
    <>
      <main className="grid grid-cols-12 h-screen min-h-screen">
        <div className="col-span-2 w-full h-full hidden sm:block">
          <SidebarComponent/>
        </div>
        <div className="col-span-10 bg-slate-100 w-full h-full">
          <div className="p-4">
            <TopNavbarComponent />
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-9 p-4">
              <div>
                <DashboardComponent />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <AssignmentsComponent />
                  <AddNewProjectComponent handlerSubmitProject={handleSubmitProject}/>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-3">
                  {cards.map((card, index)=>(
                    <CardComponent key={index} project={card}/>
                  ))}
                  </div>
              </div>
            </div>
            <div className="col-span-3 pe-4 px-6">
              <LearningMaterialsComponent />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;