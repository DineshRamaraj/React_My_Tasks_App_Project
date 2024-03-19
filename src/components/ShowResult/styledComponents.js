import styled from 'styled-components'

export const ShowResultContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  flex-grow: 1;
`

export const ShowTagsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
`

export const ShowTagsListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  list-style: none;
`

export const ShowTagsItem = styled.li`
  margin-right: 10px;
`

export const ShowTagsButton = styled.button`
  padding: 5px 10px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #f8fafc;
  border-radius: 20px;
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  cursor: pointer;
  border: 1px solid #f3aa4e;
`

export const ShowTaskHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
`

export const ShowTasksListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style: none;
`

export const ShowTasksItem = styled.li`
  padding: 5px 30px;
  background-color: #131213;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const ShowTaskName = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #f8f8f8;
`

export const ShowCategoryName = styled.p`
  padding: 5px 10px;
  font-family: 'Roboto';
  font-size: 16px;
  border-radius: 20px;
  background-color: #f3aa4e;
  color: #323f4b;
  font-weight: 600;
`

export const NoShowTasksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`

export const NoShowTasksHeading = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  color: #323f4b;
`
