import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";
import { useEffect, useState } from "react";

export default function LearningMaterialsComponent() {
  const [dashboard, setDashboard] = useState(learningMaterials);
  const [filter, setFilter] = useState("");
  const toggleFavorite = (id) =>{
    setDashboard((prevState) =>
      prevState.map((items) =>(
        items.id === id ? {...items, isFavorite : !items.isFavorite}
        : items
      ))
    );
  };
  const handleFilterChange = (filterValue) =>{
    setFilter(filterValue);
  };
  useEffect(()=>{
    let sortedData = [...dashboard];
    if(filter === "A-Z"){
      sortedData = sortedData.sort((a,b) => a.title.localeCompare(b.title));
    }else if(filter == "Z-A"){
      sortedData = sortedData.sort((a,b) => b.title.localeCompare(a.title))
    }
    setDashboard(sortedData);
  }, [filter]);



  const formatDate = (dateString) =>{
    if(!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "2-digit",
      year: "numeric"
    });
  };
  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent onFilterChange={handleFilterChange}/>
      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>
      {/* materials list */}
      <div className="space-y-3">
        {dashboard.map((items) =>(
        <div key={items.id} className="bg-light-gray px-4 py-2 flex gap-5 items-center">
          <img
            src={items.image}
            alt="HTML5"
            width={50}
            height={50}
            className="rounded-xl"
          />

          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-base font-medium">{items.title}</p>
              <Star onClick={() => toggleFavorite(items.id)} 
              fill={items.isFavorite ? "#FAA300" : "none"}
              color={items.isFavorite ? "#FAA300" : "#2B343B"} 
              size={20} />
            </div>
            <p className="text-gray-400 text-sm">Posted at: {formatDate(items.postedAt)}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
