import React, {useState} from 'react';

export const DataContext = React.createContext({
  key: '',
  setKey: () => {},
  device: '',
  setDevice: () => {},
  price: '',
  setPrice: () => {},
  distance: '',
  setDistance: () => {},
  //   selected: '',
  //   setSelected: () => {},
});

export const DataContextProvider = props => {
  const setKey = key => {
    setState({...state, key: key});
  };

  const setDevice = device => {
    setState({...state, device: device});
  };
  const setPrice = data => {
  //  console.log("this.price: "+this.price);  //this.price is always fucking undefined. why is the if statement there
    if (this.price !== data) {
      setState({...state,price: data});
    }
  };
  const setDistance = distance => {
    //console.log(JSON.stringify(state));    //state here is initState idk why
    setState({...state, distance: distance});

  };

  const initState = {
    key: 'initial key',
    setKey: setKey,
    device: 'initial device',
    setDevice: setDevice,
    price: 'initial price',
    setPrice: setPrice,
    distance: 'initial distance',
    setDistance: setDistance,
    // selected: [],
    // setSelected: setSelected,
  };

  const [state, setState] = useState(initState);

  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
};
