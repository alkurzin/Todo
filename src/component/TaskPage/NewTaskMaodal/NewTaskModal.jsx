import { React } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { newTaskCreate } from '../../../asyncAction/task';
import { setDescription, setPriority, setTitle } from '../../../redux/newTask-reducer';
import './NewTaskModal.css'

const NewTaskMaodal = (props) => {
    const dispatch = useDispatch();
    const title = useSelector(state => state.newTaskModal.title)
    const description = useSelector(state => state.newTaskModal.description)
    const priority = useSelector(state => state.newTaskModal.priority)

    let onTitleChange = (e) => {
        let newTitle = e.target.value;
        dispatch(setTitle(newTitle));
    }

    let onDescriptionChange = (e) => {
        let newDescription = e.target.value;
        dispatch(setDescription(newDescription));
    }

    let onPriorityChange = (e) => {
        let newPriority = e.target.value;
        dispatch(setPriority(newPriority));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(newTaskCreate(title, description, priority));
        props.handleClose();
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить задачу</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <input type='title'
                            id='title'
                            name='title'
                            value={title}
                            onChange={onTitleChange}
                            placeholder='Название задачи'
                            required
                            className='new-task-form__input'>
                        </input>

                        <input type='description'
                            id='description'
                            name='description'
                            value={description}
                            onChange={onDescriptionChange}
                            placeholder='Описание'
                            className='new-task-form__input'>
                        </input>

                        <Form.Select aria-label="Приоритет" className='new-task-form__input' onChange={onPriorityChange}>
                            <option value="1">Приоритет: 1</option>
                            <option value="2">Приоритет: 2</option>
                            <option value="3">Приоритет: 3</option>
                        </Form.Select>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewTaskMaodal
