import {configureStore} from "@reduxjs/toolkit";
import modal from "./slices/Modal.tsx";


//
// type CounterAction =
//     | { type: "toggleCounter" }
//     | { type: "increment" }
//     | { type: "decrement" }
//     | { type: "increase", amount: number };
//
//
// const reducer =
//     (state = initialState, action: CounterAction): CounterState => {
//         switch (action.type) {
//             case "toggleCounter":
//                 return {...state, showCounter: !state.showCounter};
//             case "increment":
//                 return {...state, counter: state.counter + 1};
//             case "decrement":
//                 return {...state, counter: state.counter - 1};
//             case "increase":
//                 return {...state, counter: state.counter + action.amount};
//             default:
//                 return state;
//         }
//     };
//
// const store = createStore(reducer);
//
export type RootState = ReturnType<typeof store.getState>;


const store = configureStore({
    reducer: {
        modal: modal,
    }
});

export default store;