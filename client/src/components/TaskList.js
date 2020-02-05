import React from 'react'

const TaskList = React.createClass({
  render () {
    const { task, remove, taskId } = this.props;
    return (
        <tr>
          <td>{task}</td>
        <td><button className="btn btn-danger btn-xs" onClick={() => {remove(taskId)}} >x</button></td>
        <td><button className="btn btn-danger btn-xs" onClick={() => {inProgress(taskId)}} >In Progress</button></td>
        {/* <td><button className="btn btn-danger btn-xs" onClick={() => add} >x</button></td>
        <td><button className="btn btn-danger btn-xs" onClick={() => add} >x</button></td> */}

        </tr>
    )
  }
});

export default TaskList;