import {useState} from 'react'

import {
  ShowResultContainer,
  ShowTagsHeading,
  ShowTagsListContainer,
  ShowTagsItem,
  ShowTagsButton,
  ShowTaskHeading,
  ShowTasksListContainer,
  ShowTasksItem,
  ShowTaskName,
  ShowCategoryName,
  NoShowTasksContainer,
  NoShowTasksHeading,
} from './styledComponents'

const ShowResult = props => {
  const {tasksList, tagsList} = props
  const [selectTabId, setSelectTab] = useState('')
  const filteredList = tasksList.filter(eachItem =>
    eachItem.category.toLowerCase().includes(selectTabId.toLowerCase()),
  )
  return (
    <ShowResultContainer>
      <ShowTagsHeading>Tags</ShowTagsHeading>
      <ShowTagsListContainer>
        {tagsList.map(eachItem => {
          const onClickTagItem = () => {
            if (
              selectTabId === eachItem.optionId ||
              filteredList.length === 0
            ) {
              setSelectTab('')
            } else {
              setSelectTab(eachItem.optionId)
            }
          }
          return (
            <ShowTagsItem key={eachItem.optionId}>
              <ShowTagsButton
                type="button"
                isActive={eachItem.optionId === selectTabId}
                onClick={onClickTagItem}
              >
                {eachItem.displayText}
              </ShowTagsButton>
            </ShowTagsItem>
          )
        })}
      </ShowTagsListContainer>
      <ShowTaskHeading>Tasks</ShowTaskHeading>
      {filteredList.length ? (
        <ShowTasksListContainer>
          {filteredList.map(eachItem => (
            <ShowTasksItem key={eachItem.id}>
              <ShowTaskName>{eachItem.taskName}</ShowTaskName>
              <ShowCategoryName>{eachItem.category}</ShowCategoryName>
            </ShowTasksItem>
          ))}
        </ShowTasksListContainer>
      ) : (
        <NoShowTasksContainer>
          <NoShowTasksHeading>No Tasks Added Yet</NoShowTasksHeading>
        </NoShowTasksContainer>
      )}
    </ShowResultContainer>
  )
}

export default ShowResult
