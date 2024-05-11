import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects }) {
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl overflow-y-scroll scrollbar-thumb-yellow">
      <h2 className="mb-8 font-old-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div className="mb-8">
        <Button onClick={onStartAddProject}> + Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => (
          <li className="mb-4 bg-white text-black rounded-md p-4 font-old-bold">
            <p>Title: {project.title}</p>
            <p>Description: {project.description}</p>
            <p>Due date: {formatDate(project.dueDate)}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
