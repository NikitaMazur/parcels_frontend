import IncomingParcels from '../components/IncomingParcels';
import { connect } from 'react-redux';
import { getIncomingParcels } from '../actions/parcels';

const mapDispatchToProps = (dispatch) => {
    return {
        getIncomingParcels: (data) => {dispatch(getIncomingParcels(data))},
    }
}

const mapStateToProps = state => {
    return {
      parcels: state.parcels.incomingParcels
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(IncomingParcels)
