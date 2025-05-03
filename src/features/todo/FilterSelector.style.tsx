import styled from '@emotion/styled';

export const Button = styled.button<{ active: boolean }>`
  margin-right: 8px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  background: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
