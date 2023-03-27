import { setTasks } from "../redux/task-reducer"
import request from "../requests/request"

export const getTasks = () => {
    return async dispatch => {
        await request.get(`Task?UserId=` + localStorage.getItem('userId'))
            .then(data => {
                dispatch(setTasks(data.data))
            });
    }
}

export const newTaskCreate = (title, description, priority) => {
    return async dispatch => {
        await request.post('/Task', {
            userId: localStorage.getItem('userId'),
            title: title,
            description: description,
            priority: priority
        })
        .then(res => dispatch(getTasks()))
    }
}

export const completed = (id) => {
    return async dispatch => {
        await request.put('/Task/Completed?Id=' + id)
        .then(res => dispatch(getTasks()))
    }
}

export const notCompleted = (id) => {
    return async dispatch => {
        await request.put('/Task/NotCompleted?Id=' + id)
        .then(res => dispatch(getTasks()))
    }
}

