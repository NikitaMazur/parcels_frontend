const initState = {
    parcels: [],
    incomingParcels: [],
    trackParcels: [],
}

export default function (state, action) {
    if (!state) return initState

    var newState = state


    switch (action.type) {
        case 'GET_PARCELS': {
            newState = { ...newState, parcels: action.parcels }
            newState.trackParcels = [];
            break
        }

        case 'GET_INCOMING_PARCELS': {
            newState = { ...newState, incomingParcels: action.incomingParcels }
            newState.trackParcels = [];
            break
        }

        case 'TRACK_PARCELS': {
            newState = { ...newState, trackParcels: action.trackParcels }
            break
        }

        default:
        break
    }

    return newState ? newState : state
}
