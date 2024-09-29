"use client"
import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import { Todo, getTodos, saveTodos } from '../../lib/localStorage'

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        setTodos(getTodos())
    }, [])

    const addTodo = (text: string) => {
        const newTodos = [
            ...todos,
            { id: Date.now().toString(), text, completed: false },
        ]
        setTodos(newTodos)
        saveTodos(newTodos)
    }

    const toggleTodo = (id: string) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(newTodos)
        saveTodos(newTodos)
    }

    const deleteTodo = (id: string) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
        saveTodos(newTodos)
    }

    const editTodo = (id: string, newText: string) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        )
        setTodos(newTodos)
        saveTodos(newTodos)
    }

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4 text-black">Todo List</h1>
            <AddTodo onAdd={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        onEdit={editTodo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList