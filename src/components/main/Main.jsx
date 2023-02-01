import React from "react";
import List from "../list/List";
import './Main.css'

function Main(props) {

    const { tasks, setTasks } = props

    const addNewTask = (name, description) => {
        const task = {
            id: 111,
            name,
            description
        }
        setTasks([...tasks[0].issues, task] )
    }

    return (
        <main className='main'>
            {
                tasks.map((task, index) => {
                    return (
                        <List key={index}
                            title={task.title}
                            tasks={task.issues || []}
                            addNewTask={addNewTask} />
                    )
                })
            }
        </main>
    )
}

export default Main