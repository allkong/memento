import { useState } from 'react';

import { Form, Input, Button } from '@/features/todo/TodoAddForm.style';
import { useTodos } from '@/features/todo/TodoProvider';

const TodoAddForm = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <Button type="submit">추가</Button>
    </Form>
  );
};

export default TodoAddForm;
