import DataService from '../Service';
import {dataSlice} from "./DataSlice";

export const getName = (navigate = null) => async (dispatch) => {
    dispatch(dataSlice.actions.dataFetchingLoading(true));

    const name = JSON.parse(localStorage.getItem('name') || '[]');
    
    if (name && name.length) {
        dispatch(dataSlice.actions.userName(name));
        navigate && navigate('/')
    } else {
        dispatch(dataSlice.actions.userName(null));
    }
}

export const getPosts = () => async (dispatch) => {
    const response = await DataService.$getPosts();

    if (response && response.length) {
        dispatch(dataSlice.actions.dataFetch(response));
    }
}


