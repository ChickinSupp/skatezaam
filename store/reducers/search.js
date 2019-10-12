const initState = {
    search: '',
}

const CURRENT_SEARCH = 'CURRENT_SEARCH';

export const updateCurrent = (value) => (
    {type: CURRENT_SEARCH, payload: value}
)

export default (state = initState, action) => {
    switch (action.type) {
        case CURRENT_SEARCH:
            return {...state, search: action.payload};
        default: 
            return state;
    }
}