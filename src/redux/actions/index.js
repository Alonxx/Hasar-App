import axios from 'axios';

import {USER_URL, HOROSCOPE_URL} from '../../utils/index';

export const getUser = () => async (dispatch) => {
	try {
		const res = await axios.get(USER_URL);
		dispatch({type: 'GET_USER', payload: res.data.results});
	} catch (err) {
		console.log(err);
	}
};

export const getHoroscope = () => async (dispatch) => {
	try {
		const res = await axios.get(HOROSCOPE_URL);
		dispatch({type: 'GET_HOROSCOPE', payload: res.data});
	} catch (err) {
		console.log(err);
	}
};

export const clearHoroscope = () => async (dispatch) => {
	dispatch({type: 'GET_HOROSCOPE', payload: []});
};
export const clearUser = () => async (dispatch) => {
	dispatch({type: 'GET_USER', payload: []});
};

export const addGender = (gender) => async (dispatch) => {
	dispatch({type: 'ADD_USER_GENDER', payload: gender});
};

export const addUserData = (data) => async (dispatch) => {
	dispatch({type: 'ADD_USER_DATA', payload: data});
};
