const initialState = {
	user: [],
	horoscope: [],
	userData: {},
};

const reducer = (state = initialState, {payload, type}) => {
	switch (type) {
		case 'GET_USER':
			return {
				...state,
				user: payload,
			};
		case 'GET_HOROSCOPE':
			return {
				...state,
				horoscope: payload,
			};
		case 'ADD_USER_GENDER':
			return {
				...state,
				userData: {...state.userData, gender: payload},
			};
		case 'ADD_USER_DATA':
			return {
				...state,
				userData: {
					...state.userData,
					name: payload.name,
					email: payload.email,
					date: payload.date,
				},
			};
		default:
			return state;
	}
};

export default reducer;
