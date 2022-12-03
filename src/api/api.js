import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://638b31157220b45d228a58dc.mockapi.io/api/v1/',
});

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  console.log(data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);

  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);

  return data;
};
