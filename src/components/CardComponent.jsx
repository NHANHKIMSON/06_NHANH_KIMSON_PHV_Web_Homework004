import { EllipsisVertical } from "lucide-react";

export default function CardComponent({ project }) {
  const getBgColor = () => {
    if (project.progress <= 25) return "bg-custom-pink";
    if (project.progress <= 50) return "bg-custom-yellow-500";
    if (project.progress <= 75) return "bg-custom-carrot";
    return "bg-custom-sky-blue"; // 100%
  };
  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`text-custom-sky-blue font-medium`}>{project.dueDate}</p>
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

          {/* <div
            className="border-l-4 rounded-full border-l-custom-pink h-5 absolute -top-1 left-1/4"
            title="25%"
          ></div>

          <div
            className="border-l-4 rounded-full border-l-custom-yellow-500 h-5 absolute -top-1 left-2/4"
            title="50%"
          ></div>

          <div
            className="border-l-4 rounded-full border-l-custom-carrot h-5 absolute -top-1 left-3/4"
            title="75%"
          ></div> */}
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
            1 day left
          </p>
        </div>
      </div>
    </div>
  );
}
