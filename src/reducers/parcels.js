const initState = {
    parcels: [],
    trackParcels: [],
}

export default function (state, action) {
    if (!state) return initState

    var newState


    switch (action.type) {
        case 'GET_PARCELS': {
            newState = { ...{}, ...state }
            newState.parcels = action.parcels
            newState.trackParcels = [];
            break
        }

        case 'TRACK_PARCELS': {
            newState = { ...{}, ...state }
            newState.trackParcels = action.trackParcels
            break
        }

        default:
        break
    }

    return newState ? newState : state
}
