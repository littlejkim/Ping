import React, {useState, createContext} from 'react';

export const VoteContext = createContext();

export const VoteProvider = props => {
  //Hook을 통한 state, setState를 정의합니다.
  const [key, setKey] = useState('');
  const [price, setPrice] = useState('');
  const [distance, setDistance] = useState('');
  const [menu, setMenu] = useState([]);

  return (
    <VoteContext.Provider value={[key, price, distance, menu]}>
      {props.children}
    </VoteContext.Provider>
  );
};
