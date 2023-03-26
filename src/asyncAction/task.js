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

