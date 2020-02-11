import React from 'react'
import TaskList from '../TaskList/TaskList'

class TaskBank extends React.Component {

// const TaskBank = React.createClass({
  render () {
    // const { tasks, remove } = this.props;
    

    return (
        <table className="table table-xs">
          <thead className="thead-default">
          <tr>
            <th>Place Holder (add table headers)</th>
          </tr>
          </thead>
          <tbody>
         <TaskList/>
          </tbody>
        </table>
    )
  }
};




export default TaskBank;






// const TaskBank = React.createClass({
//   render () {
//     // const { tasks, remove } = this.props;
    

//     return (
//         <table className="table table-xs">
//           <thead className="thead-default">
//           <tr>
//             <th>Place Holder (add table headers)</th>
//           </tr>
//           </thead>
//           <tbody>
//           {tasks.map((task) => {
//                 return (
//                     <TaskList key={task._id} task={task.taskTitle} taskId={task._id} remove={remove}/>
//                 )
//               })}
//           </tbody>
//         </table>
//     )
//   }
// });




// export default TaskBank;