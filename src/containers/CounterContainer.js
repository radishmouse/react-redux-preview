import { connect } from 'react-redux'
import Counter from '../components/Counter';
import {
    actionIncrement,
    actionDecrement
} from '../actions';

function mapStateToProps(state) {
    return {
        // the prop that react wants : the part of state to give it
        count: state.count,

        // You can have as many props from state
        // numberOfClicks: state.clickNumber,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // the prop that reacts wants : a function that calls dispatch
        handleIncrement: () => {
            dispatch(actionIncrement())
        },
        handleDecrement: () => {
            dispatch(actionDecrement())
        }
    }
}

const reduxConnecter = connect(
    mapStateToProps,
    mapDispatchToProps
);

// Iron Man putting on the suit.
export default reduxConnecter(Counter);