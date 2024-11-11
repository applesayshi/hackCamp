const Task = require("../models/taskModel.js");
const User = require("../models/userModel.js");
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

  writeFile("../data/tasks.json", taskData);
  console.log("new task added");
};

const completeTask = (req, res) => {
  const { userId, taskId } = req.body;

  const userData = readFile("../data/users.json");
  const taskData = readFile("../data/tasks.json");

  const user = usersData.users.find((user) => user.id === userId);
  const task = tasksData.tasks.find((task) => task.id === taskId);

  if (!user || !task) {
    throw new Error("Error retreiving task or user");
  }

  const currentUser = User.fromData(user);
  const currentTask = Task.fromData(task);

  userInstance.awardXP(taskInstance.xpValue);
  userInstance.awardCoins(taskInstance.coinValue);

  // Remove the completed task from tasks array
  tasksData.tasks = tasksData.tasks.filter((t) => t.id !== taskId);

  // Update the user data
  usersData.users = usersData.users.map((u) =>
    u.id === userId
      ? {
          ...u,
          xp: userInstance.xp,
          coins: userInstance.coins,
          tasksCompleted: userInstance.tasksCompleted,
        }
      : u
  );

  usersData.users = usersData.users.map((u) => {
    if (u.id === userId) {
      u.xp = userInstance.xp;
      u.coins = userInstance.coins;
    }
    return u;
  });

  writeFile("../data/tasks.json", taskData);
  writeFile("../data/users.json", userData);
  console.log("task added completed");
};
