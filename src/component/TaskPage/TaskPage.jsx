import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../asyncAction/task';
import './TaskPage.css'

const TaskPage = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.taskPage.tasks)

    useEffect(() => {
        dispatch(getTasks());
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [])

    return (
        <div className="container">
            {
                tasks.map(t =>
                    <div className='task'>
                        <div className='complited'>
                            <button className='btn-complited'></button>
                        </div>
                        <div className='task-body'>
                            <div key={t.id}>
                                <div className='title'>{t.title}</div>
                                <div className='description'>{t.description}</div>
                                <div className='priority'>Приоритет: {t.priority}</div>
                                <div className="hr-line"></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TaskPage
