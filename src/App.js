import {v4} from 'uuid'
import {Component} from 'react'
import CreateTask from './components/CreateTask'
import ShowResult from './components/ShowResult'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    selectTabId: tagsList[0].optionId,
    searchInput: '',
    tasksList: [],
  }

  selectTab = optionId => {
    this.setState({selectTabId: optionId})
  }

  changeSearchInput = value => {
    this.setState({searchInput: value})
  }

  addTask = () => {
    const {searchInput, selectTabId} = this.state
    const findItem = tagsList.find(
      eachItem => eachItem.optionId === selectTabId,
    )
    const newObject = {
      id: v4(),
      taskName: searchInput,
      category: findItem.displayText,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newObject],
      selectTabId: tagsList[0].optionId,
      searchInput: '',
    }))
  }

  render() {
    const {selectTabId, tasksList, searchInput} = this.state
    return (
      <div className="app-container">
        <CreateTask
          tagsList={tagsList}
          selectTab={this.selectTab}
          selectTabId={selectTabId}
          addTask={this.addTask}
          changeSearchInput={this.changeSearchInput}
          searchInput={searchInput}
        />
        <ShowResult tagsList={tagsList} tasksList={tasksList} />
      </div>
    )
  }
}

export default App
