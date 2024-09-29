import React, { useState } from 'react'

interface AddTodoProps {
    onAdd: (text: string) => void
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            onAdd(text.trim())
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
                className="p-2 border rounded mr-2 w-64 text-black"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    )
}

export default AddTodo