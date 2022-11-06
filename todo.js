const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
    let myDate=new Date();
    let todayDate=myDate.toISOString().split("T")[0];
    const overdue = () => {
      let overduearray= all.filter((task) => Date.parse(task.dueDate)<Date.parse(todayDate));
      return overduearray;

    }
  
    const dueToday = () => {
      let todayduearray= all.filter((task) => task.dueDate === todayDate);
      return todayduearray;
    }
  
    const dueLater = () => {
      
      let duelaterarray= all.filter((task) => Date.parse(task.dueDate)>Date.parse(todayDate));
      return duelaterarray;
    }
  
    const toDisplayableList = (list) => {
      
      let displayarray = list.map((work) => {
        let workstatus = work.completed ? 'x' : ' ';
        if (work.dueDate===todayDate) {
            return `[${workstatus}] ${work.title}`;
        } else {
            return `[${workstatus}] ${work.title} ${work.dueDate}`;
        }
      });
      return displayarray.join("\n");
      
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
 module.exports=todoList;
 