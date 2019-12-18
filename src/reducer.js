import { ADD, DELETE} from './actions';

const resultReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [...state, action.number]
		case DELETE:
			return [];
		default:
			return state;
	}
}

export default resultReducer;