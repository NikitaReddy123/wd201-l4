/* eslint-disable no-undef */
const todo = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todo();
const today = new Date().toLocaleDateString("en-CA");
describe("TODO suite", () => {
  beforeAll(() => {
    add({
      title: "Drink coffee",
      dueDate: today,
      completed: true,
    });
  });
  test("Add task", () => {
    let bef = all.length;
    add({
      title: "Watch a movie",
      dueDate: today,
      completed: false,
    });
    expect(all.length).toBe(bef + 1);
  });
  test("Mark task as complete", () => {
    all[0].completed = false;
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Over due tasks", () => {
    const overcount = overdue();
    var yesterday_date = new Date();
    yesterday_date.setDate(yesterday_date.getDate() - 1);
    let yesterday = yesterday_date.toLocaleDateString("en-CA");
    add({
      title: "Watch a drama",
      dueDate: yesterday,
      completed: false,
    });
    expect(overdue().length).toBe(overcount.length + 1);
  });
  test("Due today tasks", () => {
    const todcount = dueToday();
    add({
      title: "Go to korea",
      dueDate: today,
      completed: false,
    });
    expect(dueToday().length).toBe(todcount.length + 1);
  });
  test("Due later tasks", () => {
    const duecount = dueLater();
    var tomorrow_date = new Date();
    tomorrow_date.setDate(tomorrow_date.getDate() + 1);
    let tomorrow = tomorrow_date.toLocaleDateString("en-CA");
    add({
      title: "Sleep early",
      dueDate: tomorrow,
      completed: false,
    });
    expect(dueLater().length).toBe(duecount.length + 1);
  });
});
