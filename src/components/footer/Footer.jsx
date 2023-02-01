import React from "react";
import './Footer.css'

function Footer({tasks}) {

    const activeTasks = tasks.filter(task => task.title === 'in progress')
    const finisedTasks = tasks.filter(task => task.title === 'finished')

    return (
        <footer className='footer'>
            <div className='footer__tasks'>
                <span className='footer__text'>Active tasks: {activeTasks[0].issues.length}</span>
                <span className='footer__text'>Finished tasks: {finisedTasks[0].issues.length}</span>
            </div>
            <span className='footer__text'>Kanban board by Alexey, 2023</span>
        </footer>
    )
}

export default Footer