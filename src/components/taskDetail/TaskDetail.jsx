import React from "react";
import { useRouteMatch, Link } from 'react-router-dom'
import './TaskDetail.css'

function TaskDetail(props) {

    const match = useRouteMatch()
    const { taskId } = match.params
    const { tasks } = props

    const a = []
    const b = []

    for (let i = 0; i < tasks.length; i++) {
        b[i] = tasks[i].issues
        for (let j = 0; j < b[i].length; j++) {
            a.push(b[i][j])
        }
    }

    const task = a.find(task => task.id === taskId)




    return (
        <div className="task-detail">
            <div className="task-detail__header">
                <h2 className="task-detail__title">{task.name}</h2>
                <Link to='/'>
                    <div className="task-detail__close"></div>
                </Link>
            </div>
            <p className="task-detail__text">{task.description}</p>
        </div>
    )
}

export default TaskDetail