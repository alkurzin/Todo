import { setHistory } from "../redux/history-reducer";
import request from "../requests/request";

export const getHistory = () => {
    return async dispatch => {
        await request.get(`History`)
            .then(data => dispatch(setHistory(data.data)))
    }
}

export const cancelHistory = (historyId) => {
    return async dispatch => {
        await request.put(`History`, {
            historyId: historyId
        })
        .then(data => dispatch(setHistory(data.data)))
    }
}