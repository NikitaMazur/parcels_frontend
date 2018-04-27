import Cookies from 'cookies-js'
import request from 'superagent'

import { PARCEL_URL } from '../constants/api'

export const getParcels = () => {
    return (dispatch) => {
        request
            .get(`${PARCEL_URL}/parcels`)
            .set('Token', Cookies.get('AuthToken'))
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        dispatch({
                            type: 'GET_PARCELS',
                            parcels: res.body
                        })
                        break;

                    default:
                        throw new Error()
                }
            })
    }
}

export const getIncomingParcels = () => {
    return (dispatch) => {
        request
            .get(`${PARCEL_URL}/parcels/status?status=out for delivery`)
            .set('Token', Cookies.get('AuthToken'))
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        dispatch({
                            type: 'GET_PARCELS',
                            parcels: res.body
                        })
                        break;

                    default:
                        throw new Error()
                }
            })
    }
}

export const changeStatus = (data) => {
    return (dispatch) => {
        request
            .put(`${PARCEL_URL}/parcels/multi-status`)
            .query(data)
            .set('Token', Cookies.get('AuthToken'))
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        dispatch(getParcels())
                        break;

                    default:
                        throw new Error()
                }
            })
    }
}

export const searchParcels = (data) => {
    return (dispatch) => {
        request
            .get(`${PARCEL_URL}/parcels/search`)
            .query(data)
            .set('Token', Cookies.get('AuthToken'))
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        dispatch({
                            type: 'TRACK_PARCELS',
                            trackParcels: res.body
                        })
                        break;

                    default:
                        break;
                }
            })
    }
}

