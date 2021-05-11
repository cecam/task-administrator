import {createContext} from 'react'

import useLocalStorage from '../hooks/useLocalStorage'

export const TaskContext = createContext()

const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const deleteTask = id => {
        console.log(id);
        setTasks(
            tasks.filter(task => task.id !== id)
        )
    }
    return(
        <TaskContext.Provider
            value={{
                tasks, 
                setTasks,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider