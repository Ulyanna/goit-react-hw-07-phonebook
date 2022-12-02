import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {setFilter} from "../../redux/filterActions"

import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter)
  const dispatch = useDispatch()
    const handleFilterContacts = e => {
    return dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name :
      <Input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={handleFilterContacts}
      />
    </Label>
  );
};

