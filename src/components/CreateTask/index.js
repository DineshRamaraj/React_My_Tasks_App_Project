import {
  CreateTaskContainer,
  CreateHeading,
  FormContainer,
  InputContainer,
  LabelItem,
  Input,
  Select,
  Option,
  AddButton,
} from './styledComponents'

const CreateTask = props => {
  const {
    tagsList,
    selectTabId,
    selectTab,
    addTask,
    changeSearchInput,
    searchInput,
  } = props

  const onChangeInput = event => {
    changeSearchInput(event.target.value)
  }

  const onSubmitAddTask = event => {
    event.preventDefault()
    addTask()
  }

  const onChangeSelectTab = event => {
    selectTab(event.target.value)
  }

  return (
    <CreateTaskContainer>
      <CreateHeading>Create a task!</CreateHeading>
      <FormContainer onSubmit={onSubmitAddTask}>
        <InputContainer>
          <LabelItem htmlFor="Task">Task</LabelItem>
          <Input
            id="Task"
            type="text"
            placeholder="Enter the task here"
            onChange={onChangeInput}
            value={searchInput}
          />
        </InputContainer>
        <InputContainer>
          <LabelItem htmlFor="Tags">Tags</LabelItem>
          <Select value={selectTabId} onChange={onChangeSelectTab} id="Tags">
            {tagsList.map(eachItem => (
              <Option key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </Option>
            ))}
          </Select>
        </InputContainer>
        <AddButton type="submit">Add Task</AddButton>
      </FormContainer>
    </CreateTaskContainer>
  )
}

export default CreateTask
