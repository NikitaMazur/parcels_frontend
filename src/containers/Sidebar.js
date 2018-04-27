import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch({type: 'AUTH_USER_LOGOUT'})},
    }
}

export default connect(null, mapDispatchToProps)(Sidebar)
