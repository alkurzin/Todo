import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { CheckCircle, Circle, Trash3 } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { completed, deleteTasks, getTasks, notCompleted } from '../../asyncAction/task';
import { setDescription, setPriority, setTitle } from '../../redux/newTask-reducer';
import EditTaskModal from './EditTaskModal/EditTaskModal';
import NewTaskMaodal from './NewTaskMaodal/NewTaskModal';
import './TaskPage.css'

const TaskPage = (props) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.taskPage.tasks);



    useEffect(() => {
        dispatch(getTasks());
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        dispatch(setTitle(""));
        dispatch(setDescription(""));
        dispatch(setPriority(1));

    }

    const handleShow = () => setShow(true);

    const editHandleShow = (id) => {
        routeChange(id);
    }

    const taskComleted = (id) => {
        dispatch(completed(id));
    }

    const taskNotCompleted = (id) => {
        dispatch(notCompleted(id));
    }

    const deleteTask = (id) => {
        dispatch(deleteTasks(id));
    }

    let navigate = useNavigate();

    const routeChange = (id) =>{
      let path = `/${id}`;
      navigate(path);
    }

    return (
        <div className="container">
            <NewTaskMaodal show={show} handleClose={handleClose} />
            {props.show ? 
                <EditTaskModal show={props.show} />
                :
                <div></div>
            }
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
                        <div>
                            <div className='task'>
                                <div className='completed'>
                                    {t.isCompleted ?
                                        <CheckCircle onClick={() => taskNotCompleted(t.id)} className='btn-completed-check' />
                                        :
                                        <Circle onClick={() => taskComleted(t.id)} className='btn-completed' />
                                    }
                                </div>
                                <div onClick={() => editHandleShow(t.id)} className='task-body'>
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

                                    </div>
                                </div>
                                <div className='btn-delete'>
                                    <Trash3 onClick={() => deleteTask(t.id)}/>
                                </div>
                            </div>
                            <div className="hr-line"></div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TaskPage
