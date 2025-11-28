import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid' // <-- required for unique id

class CreateSection extends Component {
  state = {task: '', tag: ''}

  componentDidMount() {
    const {tagsList} = this.props
    this.setState({tag: tagsList[0].optionId})
  }

  changeTaskName = event => {
    this.setState({task: event.target.value})
  }

  changeTag = event => {
    this.setState({tag: event.target.value})
  }

  submitTask = event => {
    event.preventDefault()

    const {addTask, tagsList} = this.props
    const {task, tag} = this.state

    if (task.trim() === '') return

    const newTask = {
      id: uuidv4(), // 🔥 required by test case 19
      name: task,
      tag,
    }

    addTask(newTask)

    // 🔥 reset input and select to initial state
    this.setState({
      task: '',
      tag: tagsList[0].optionId,
    })
  }

  render() {
    const {tagsList} = this.props
    const {task, tag} = this.state

    return (
      <div className="create-container">
        <h1>Create a task!</h1>
        <form onSubmit={this.submitTask}>
          <label htmlFor="task" className="label">
            Task
          </label>
          <input
            type="text"
            id="task"
            className="input"
            placeholder="Enter the task here"
            value={task}
            onChange={this.changeTaskName}
          />

          <label htmlFor="tags" className="label">
            Tags
          </label>
          <select
            id="tags"
            className="select"
            value={tag}
            onChange={this.changeTag}
          >
            {tagsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>

          <button type="submit" className="submit-btn">
            Add Task
          </button>
        </form>
      </div>
    )
  }
}

export default CreateSection
