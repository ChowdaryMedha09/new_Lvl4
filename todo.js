// todo.js
const ToDoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const Mark_As_Complete = (index) => {
    all[index].completed = true;
  };

  const Over_Due = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const Due_Today = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const Due_Later = () => {
    return all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  return { all, add, Mark_As_Complete, Over_Due, Due_Today, Due_Later };
};

module.exports = ToDoList;
