import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Text = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#888' : '#000')};
  flex: 1;
  word-break: break-word;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 600px) {
    align-self: flex-end;
    font-size: 14px;
  }
`;
