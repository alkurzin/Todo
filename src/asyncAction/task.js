import { setDescription, setPriority, setTitle } from "../redux/editTask-reducer";
import { setTasks } from "../redux/task-reducer"
import request from "../requests/request"

export const getTasks = (searchString) => {
    return async dispatch => {
        await request.get(`Task?UserId=` + localStorage.getItem('userId') + `&SearchString=` + searchString)
            .then(data => {
                dispatch(setTasks(data.data))
            });
    }
}

export const getTask = (id) => {
    return async dispatch => {
        await request.get(`Task/Task?Id=` + id)
            .then(data => {
                dispatch(setTitle(data.data.title));
                dispatch(setDescription(data.data.description));
                dispatch(setPriority(data.data.priority));
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
        .then(res => dispatch(getTasks("")))
    }
}

export const editTask = (id, title, description, priority) => {
    return async dispatch => {
        await request.put('/Task', {
            taskId: id,
            title: title,
            description: description,
            priority: priority
        })
        .then(res => dispatch(getTasks("")))
    }
}


export const completed = (id) => {
    return async dispatch => {
        await request.put('/Task/Completed?Id=' + id)
        .then(res => dispatch(getTasks("")))
    }
}

export const notCompleted = (id) => {
    return async dispatch => {
        await request.put('/Task/NotCompleted?Id=' + id)
        .then(res => dispatch(getTasks("")))
    }
}

export const deleteTasks = (id) => {
    return async dispatch => {
        await request.delete('/Task/?Id=' + id)
        .then(res => dispatch(getTasks("")))
    }
}