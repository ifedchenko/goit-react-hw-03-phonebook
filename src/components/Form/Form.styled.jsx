import styled from 'styled-components';

export const FormBody = styled.form`
  box-sizing: border-box;
  padding: 30px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin-top: 10px;
  padding: 5px;
`;

export const AddContactBtn = styled.button`
  margin-top: 20px;
  width: 100px;
  cursor: pointer;
`;
