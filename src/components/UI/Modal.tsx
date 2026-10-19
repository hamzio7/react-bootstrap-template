import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store/store.tsx";
import {modalActions} from "../../store/slices/Modal.tsx";
import type {PropsWithChildren} from "react";

interface ModalProps {
    onConfirm?: () => void;
}


function AppModal({children, onConfirm}: PropsWithChildren<ModalProps>) {

    const isShown = useSelector<RootState, boolean>(state => state.modal.isShown);

    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(modalActions.toggleModal())
    }

    const handleConfirm = () => {
        onConfirm ? onConfirm() : undefined;
        toggleModal();
    }


    return (
        <Modal show={isShown} onHide={toggleModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Themed modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>Cancel</Button>
                <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AppModal;