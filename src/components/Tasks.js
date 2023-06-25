import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        ></Task>
      ))}
    </>
  );
};
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  map: PropTypes.func,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};
export default Tasks;
