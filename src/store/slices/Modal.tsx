import {createSlice} from "@reduxjs/toolkit";

interface ModalProps {
    isShown: boolean;
}

const initialState: ModalProps = {
    isShown: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        toggleModal(state) {
            state.isShown = !state.isShown
        }
    }
})

export default modalSlice.reducer;
export const modalActions = modalSlice.actions