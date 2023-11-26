import UserActionsTypes from "./actions-types"

const initialState = {
    currentUser: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionsTypes.LOGIN:
            
        case UserActionsTypes.LOGOUT:
            
        default:
            return state
    }
}

export default userReducer
