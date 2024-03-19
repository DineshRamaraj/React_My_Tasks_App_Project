import styled from 'styled-components'

export const CreateTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #131213;
  width: 30%;
  padding: 50px 0px;
`

export const CreateHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #f3aa4e;
  font-weight: 400;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const LabelItem = styled.label`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #f1f5f9;
  margin-bottom: 8px;
`

export const Input = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #64748b;
  width: 100%;
  font-size: 16px;
  font-family: 'Roboto';
  outline: none;
`

export const Select = styled.select`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #000000;
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Roboto';
  outline: none;
`

export const Option = styled.option`
  font-size: 16px;
  font-family: 'Roboto';
`

export const AddButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: #f3aa4a;
  color: #f8f8f8;
  padding: 10px 30px;
  align-self: center;
  cursor: pointer;
`
