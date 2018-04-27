const initState = {
    parcels: [],
    incomingParcels: [],
    trackParcels: [],
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'GET_PARCELS': {
            return { ...state, parcels: action.parcels, trackParcels: [] }
            break
        }

        case 'GET_INCOMING_PARCELS': {
            return { ...state, incomingParcels: action.incomingParcels, trackParcels: [] }
            break
        }

        case 'TRACK_PARCELS': {
            return { ...state, trackParcels: action.trackParcels }
            break
        }

        default:
        return state
        break
    }
}
