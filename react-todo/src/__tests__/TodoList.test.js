import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements.length).toBe(2); // Assuming initial state has 2 todos
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
      target: { value: 'New Todo' }
    });
    fireEvent.click(screen.getByText(/add todo/i));
    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements.length).toBe(3); // Should have one more todo now
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo completed status', () => {
    render(<TodoList />);
    const todoElement = screen.getByText('Learn React');
    fireEvent.click(todoElement);
    expect(todoElement).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoElement = screen.getByText('Learn React');
    fireEvent.click(screen.getByText(/delete/i));
    expect(todoElement).not.toBeInTheDocument();
  });
});
