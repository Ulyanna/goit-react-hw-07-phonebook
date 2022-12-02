import { createReducer } from '@reduxjs/toolkit';
import {setFilter} from "./filterActions"

export const filterReducer = createReducer('', {
    [setFilter]: (_, { payload }) => payload,
})