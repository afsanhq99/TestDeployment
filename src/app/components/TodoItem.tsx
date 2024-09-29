import React from 'react'
import { Todo } from '../../lib/localStorage'

interface TodoItemProps {
    todo: Todo
    onToggle: (id: string) => void
    onDelete: (id: string) => void
    onEdit: (id: string, newText: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = React.useState(false)
    const [editText, setEditText] = React.useState(todo.text)

    const handleEdit = () => {
        onEdit(todo.id, editText)
        setIsEditing(false)
    }

    return (
        <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-2 text-black">
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-grow mr-2 p-2 border rounded"
                />
            ) : (
                <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                    {todo.text}
                </span>
            )}
            <div>
                {isEditing ? (
                    <button onClick={handleEdit} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                        Save
                    </button>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                        Edit
                    </button>
                )}
                <button onClick={() => onToggle(todo.id)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                    Toggle
                </button>
                <button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                </button>
            </div>
        </li>
    )
}

export default TodoItem