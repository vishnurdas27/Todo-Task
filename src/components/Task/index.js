import {Component} from 'react'
import './index.css'
import CreateSection from '../CreateSection'
import TagSection from '../TagSection'

class Task extends Component {
  state = {
    tasks: [],
  }

  addTask = newTask => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
    }))
  }

  render() {
    const {tagsList} = this.props
    const {tasks} = this.state

    return (
      <div className="Main-container">
        <CreateSection tagsList={tagsList} addTask={this.addTask} />
        <TagSection tagsList={tagsList} tasks={tasks} />
      </div>
    )
  }
}

export default Task
