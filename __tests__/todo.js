// __tests__/todo.js
let ToDoList = require("../todo");

const { all, Mark_As_Complete, add, Over_Due, Due_Today, Due_Later } = ToDoList();
/* eslint-disable no-undef */
describe("Todo List Testing", () => {
  beforeAll(() => {
    // Seed the test data
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    [
      {
        title: "Check Mail",
        completed: false,
        dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "Upload Resume",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "Complete assignments",
        completed: false,
        dueDate: new Date(today.getTime() + 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("This Should add a new todo", () => {
    expect(all.length).toEqual(3);

    add({
      title: "An item for testing",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toEqual(false);
    Mark_As_Complete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("Should retrieve overdue items", () => {
    expect(Over_Due().length).toEqual(1);
  });

  test("Should retrieve due today items", () => {
    expect(Due_Today().length).toEqual(2);
  });

  test("Should retrieve due later items", () => {
    expect(Due_Later().length).toEqual(1);
  });
});
