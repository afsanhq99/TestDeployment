export const getTodos = (): Todo[] => {
    if (typeof window !== 'undefined') {
        const todos = localStorage.getItem('todos')
        return todos ? JSON.parse(todos) : []
    }
    return []
}

export const saveTodos = (todos: Todo[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}

export interface Todo {
    id: string
    text: string
    completed: boolean
}