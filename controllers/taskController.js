const Task = require("../models/taskModel.js");
const { readFile, writeFile } = require("jsonUtils.js");

const getTasks = (res, req) => {
  const taskData = readFile("../data/tasks.json");
  if (!taskData || !taskData.tasks) {
    throw new Error("No tasks found");
  }
  res.json(taskData.tasks);
};

const addTask = (req, res) => {
  const { descr, difficulty } = req.body;

  const taskData = readFile("../data/tasks.json");
  if (!taskData) {
    throw new Error("Error reading tasks data");
  }

  const newId = 1;
  if (tasksData.tasks.length == 0) {
    newId = Math.max(...tasksData.tasks.map((t) => t.id)) + 1;
  }

  const newTask = new Task(newId, descr, difficulty);

  tasksData.tasks.push({
    id: newTask.id,
    descr: newTask.descr,
    difficulty: newTask.difficulty,
    xp: newTask.xp,
    coins: newTask.coins,
  });
};
