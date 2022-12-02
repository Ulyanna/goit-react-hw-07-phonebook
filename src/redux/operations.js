import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api"


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, thunkAPI) => {
        try {
            const result = await api.addContact(data)
            return result
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            await api.deleteContact(contactId)
            return contactId
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)