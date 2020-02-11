import { connect } from 'react-redux';
import Display from '../components/Display';

function mapStateToProps({count}) {
    return {
        count
    };
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(Display);