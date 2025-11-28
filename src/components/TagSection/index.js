import './index.css'
import {Component} from 'react'

class TagSection extends Component {
  state = {selectedTag: ''}

  onClickTag = value => {
    this.setState({selectedTag: value})
  }

  render() {
    const {tagsList, tasks} = this.props
    const {selectedTag} = this.state

    const filteredTask =
      selectedTag === ''
        ? tasks
        : tasks.filter(each => each.tag === selectedTag)

    return (
      <div className="tag-container">
        <h1 className="tag-head">Tags</h1>

        {/* TAG BUTTONS LIST */}
        <ul className="tags">
          <li>
            <button
              className={`tag-btn ${selectedTag === '' ? 'active' : ''}`}
              onClick={() => this.onClickTag('')}
            >
              All
            </button>
          </li>

          {tagsList.map(each => (
            <li key={each.optionId}>
              <button
                className={`tag-btn ${
                  selectedTag === each.optionId ? 'active' : ''
                }`}
                onClick={() => this.onClickTag(each.optionId)}
              >
                {each.displayText}
              </button>
            </li>
          ))}
        </ul>

        <div className="tasks-side">
          <h1>Tasks</h1>

          {filteredTask.length > 0 ? (
            <ul className="tasks-cont">
              {filteredTask.map(each => (
                <li key={each.id} className="task-bar">
                  <p className="text">{each.name}</p>

                  <p className="tag-text">
                    {
                      tagsList.find(tagItem => tagItem.optionId === each.tag)
                        .displayText
                    }
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-task">No Tasks Added Yet</p>
          )}
        </div>
      </div>
    )
  }
}

export default TagSection
