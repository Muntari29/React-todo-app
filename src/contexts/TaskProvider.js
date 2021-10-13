import { createContext, useContext, useState } from "react";
import { v4 } from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage('tasks',[])

    const addTask = (content) => {
        setTasks([
            ...tasks,
            {
                id: v4(),
                content,
                complete: false // 초기값
            }
        ])
    }

    const updateTask = (id, status) => {
        setTasks(
            tasks.map((item) => item.id === id
                ? {...item, complete: status}
                : item)
        )
    }

    const removeTask = (id) => {
        setTasks(
            tasks.filter((item) => item.id !== id)
        )
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    ) 

}

export default TaskProvider