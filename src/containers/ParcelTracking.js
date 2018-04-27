import ParcelTracking from '../components/ParcelTracking';
import { connect } from 'react-redux';
import { searchParcels } from '../actions/parcels';

const mapDispatchToProps = (dispatch) => {
    return {
        searchParcels: (data) => {dispatch(searchParcels(data))},
    }
}

const mapStateToProps = state => {
    return {
      parcels: state.parcels.trackParcels
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ParcelTracking)
