import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import {filterReducer} from "./filterReducer"

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer
	}
});

