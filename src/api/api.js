import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://638733b6e399d2e473f7c7c2.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');

  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);

  return result;
};

export const deleteContact = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);

  return result;
};