// U89173488

import React, { useState } from 'react';
import tasks from '../tasks';
import FancyText from './FancyText';
import './TaskGenerator.css';

const motivationalMessages = [
  "You can do it!",
  "Keep going!",
  "You're doing great!",
  "Stay positive and strong!",
  "Every step counts!"
];

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [taskList, setTaskList] = useState(tasks);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % taskList.length);
  };

  const markTaskCompleted = (id) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(updatedTasks);
  };

  const currentTask = taskList[currentTaskIndex];
  const motivationalMessage = motivationalMessages[currentTaskIndex % motivationalMessages.length];

  return (
    <div className="task-generator">
      <FancyText title={true} text="Current Task" />
      <p className="task-name">{currentTask.name}</p>
      <p className="task-status">
        Status: {currentTask.isCompleted ? "Completed ✔" : "Pending"}
      </p>
      <button onClick={() => markTaskCompleted(currentTask.id)}>
        {currentTask.isCompleted ? "Mark as Pending" : "Mark as Completed"}
      </button>
      <button onClick={nextTask}>Next Task</button>
      <FancyText title={false} text={motivationalMessage} />
    </div>
  );
};

export default TaskGenerator;
