import { createSlice } from '@reduxjs/toolkit';

interface test_slice_type {
    name: string;
    msg: string;
}

const initialState: test_slice_type = {
    name: 'Test global value',
    msg: 'Test value',
};

export const test_silce = createSlice({
    initialState: initialState,
    name: 'test',
    reducers: {
        changeState: (state: test_slice_type, actions) => {
            return { ...state, ...actions.payload };
        },
    },
});

export const { changeState } = test_silce.actions;
export default test_silce.reducer;
