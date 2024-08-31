import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'Write tests' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('Write tests')).toBeInTheDocument();
});

test('can toggle a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Learn React'));
  expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
});

test('can delete a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
