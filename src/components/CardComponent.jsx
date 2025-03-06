import { EllipsisVertical } from "lucide-react";

export default function CardComponent({ project }) {
  const getBgColor = () => {
    if (project.progress <= 25) return "bg-custom-pink";
    if (project.progress <= 50) return "bg-custom-yellow-500";
    if (project.progress <= 75) return "bg-custom-carrot";
    return "bg-custom-sky-blue"; // 100%
  };
  const getColor = () => {
    if (project.progress <= 25) return "text-custom-pink";
    if (project.progress <= 50) return "text-custom-yellow-500";
    if (project.progress <= 75) return "text-custom-carrot";
    return "text-custom-sky-blue";
  };
  const formatDate = (dateString) =>{
    if(!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });
  };
  const getDayLeft = (dueDate) =>{
    if(!dueDate) return "N/A";

    const due = new Date(dueDate);
    const today = new Date();

    const diffTime = due - today;
    const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDay > 0 ? `${diffDay} days left ` : "Due date passed";

  }
  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`font-medium ${getColor()}`}>{formatDate(project.dueDate)}</p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {project.projectName}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {/* You should make web design pack with 30 different pose and with other
          component on the internet as well. */}
          {project.description}
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{project.progress}</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className={`h-2.5 rounded-full ${getBgColor()}`} style={{ width: `${project.progress}%`}} ></div>
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
             {getDayLeft(project.dueDate)}
          </p>
        </div>
      </div>
    </div>
  );
}
