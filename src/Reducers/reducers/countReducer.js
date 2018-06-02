
const initialState = {
    num: 0
};


function countReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            const newState = {
                num: state.num + action.text
            }
            return Object.assign({}, state, newState)

        case 'SUB':
            const nextState = {
                num: state.num - action.text
            }
            return Object.assign({}, state, nextState)
        default:
            return state
    }
}

export default countReducer
