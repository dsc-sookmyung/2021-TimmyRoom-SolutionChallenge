import axios from 'axios';

export const initialState = {
    nickname: '',
    phone: '',
    role: 'nondeveloper',
};

// action type
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = async (data) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/users', data);
        dispatch(registerAction(data));
    };
};

// action creator
export const registerAction = (data) => {
    return {
        type: REGISTER_USER,
        data,
    };
};

export const loginUser = async (data) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/login', data);
        dispatch(loginAction(data));
    };
};

export const loginAction = (data) => {
    return {
        type: LOGIN_USER,
        data,
    };
};

const reducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                nickname: action.data.nickname,
                phone: action.data.phone,
                role: action.data.role,
            };
        case LOGIN_USER:
            return {
                nickname: action.data.nickname,
                phone: action.data.phone,
            };
        default:
            return state;
    }
};

export default reducer;
