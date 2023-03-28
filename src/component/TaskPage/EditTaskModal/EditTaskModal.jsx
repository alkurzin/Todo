import { React, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editTask, getTask } from '../../../asyncAction/task';
import { setDescription, setPriority, setTitle } from '../../../redux/editTask-reducer';

const EditTaskModal = (props) => {
    const dispatch = useDispatch();

    const { id } = useParams();
    
    const title = useSelector(state => state.editTaskModal.title);
    const description = useSelector(state => state.editTaskModal.description);
    const priority = useSelector(state => state.editTaskModal.priority);

    useEffect(() => {
        dispatch(getTask(id));
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [id])

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
        dispatch(editTask(id, title, description, priority));
        handleClose();
    }

    let navigate = useNavigate();

    const handleClose = () => {
        dispatch(setTitle(""));
        dispatch(setDescription(""));
        dispatch(setPriority(1));
        navigate(`/`);

    }

    return (
        <div>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Задача</Modal.Title>
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

                        <Form.Select aria-label="Приоритет" className='new-task-form__input' value={priority} onChange={onPriorityChange}>
                            <option value="1">Приоритет: 1</option>
                            <option value="2">Приоритет: 2</option>
                            <option value="3">Приоритет: 3</option>
                        </Form.Select>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditTaskModal
