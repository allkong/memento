import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
