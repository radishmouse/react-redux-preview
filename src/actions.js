// import axios from 'axios';
// Export all the things!!!

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function actionIncrement(data) {    
// export async function actionIncrement(data) {    
    // const result = await axios.post(URL, data);
    return {
        type: INCREMENT,
        // payload: result
    };
}

export function actionDecrement() {
    return {
        type: DECREMENT
    };
}