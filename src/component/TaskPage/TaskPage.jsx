import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { CheckCircle, Circle } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { completed, getTasks, notCompleted } from '../../asyncAction/task';
import { setDescription, setPriority, setTitle } from '../../redux/newTask-reducer';
import NewTaskMaodal from './NewTaskMaodal/NewTaskModal';
import './TaskPage.css'

const TaskPage = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.taskPage.tasks)

    useEffect(() => {
        dispatch(getTasks());
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        dispatch(setTitle(""));
        dispatch(setDescription(""));
        dispatch(setPriority(""));

    }
    const handleShow = () => setShow(true);

    const taskComleted = (id) => {
        dispatch(completed(id));
    }

    const taskNotCompleted = (id) => {
        dispatch(notCompleted(id));
    }

    return (
        <div className="container">
            <NewTaskMaodal show={show} handleClose={handleClose} />
            <div className='search-block'>
                <input type='search'
                    placeholder='Search...'
                    className='search_string'
                    // onKeyDown={onKeyDown}
                    value="asdas"//{props.searchString}
                //onChange={onUpdateSearchString} 
                />
                <div className='cancel-btn-block'>
                    {/* <p className='cancel-btn' onClick={(e) => { onCancel(); }}>очистить</p> */}
                </div>
                <div className='new_task'>
                    {/* <button className='new_task_btn'>+</button> */}
                    <Button onClick={handleShow} className="new_task_btn">
                        +
                    </Button>
                </div>
            </div>
            <div>
                {
                    tasks.map(t =>
                        <div className='task'>
                            <div className='completed'>
                                {t.isCompleted ?
                                    <CheckCircle onClick={() => taskNotCompleted(t.id)} className='btn-completed-check' />
                                    :
                                    <Circle onClick={() => taskComleted(t.id)} className='btn-completed' />
                                }
                            </div>
                            <div className='task-body'>
                                <div key={t.id}>
                                    {!t.isCompleted ?
                                        <div>
                                            <div className='title'>{t.title}</div>
                                            <div className='description'>{t.description}</div>
                                            <div className='priority'>Приоритет: {t.priority}</div>
                                        </div>
                                        :
                                        <div className='title-comleted'>{t.title}</div>
                                    }
                                    <div className="hr-line"></div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TaskPage
