
const initialState = {
    allPictures: []
};


function pictureListReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_PICTURELIST':
            const newState = {
                allPictures: action.payload
            }
            return Object.assign({}, state, newState)
        default:
            return state
    }
}

export default pictureListReducer
