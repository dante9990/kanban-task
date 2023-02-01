import React, {useState} from "react";
import Button from "../button/Button";
import FormSubmit from "../FormSubmit/FormSubmit";
import './List.css';

function List(props) {
    const { title, tasks, addNewTask } = props
    const [visible, setVisible] = useState(false)

    const changeVisible = () => {
        setVisible(!visible)
    }

    const formSubmit = (name, description) => {
		addNewTask(name, description)
        changeVisible()
	}

    return (
        <section className='list'>
            <h2 className='list__title'>{title}</h2>
            <div className='list__items'>
                {
                    tasks.map(task => {
                        return (
                            <div className='list__item' key={task.id}>
                                <h3 className='list__text'>{task.name}</h3>
                            </div>
                        )

                    })
                }
            </div>
            {!visible && <Button changeVisible={changeVisible} />}
            {visible && title === 'backlog' && <FormSubmit formSubmit={formSubmit} />}
            
        </section>
    )
}

export default List