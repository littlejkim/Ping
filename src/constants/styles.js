import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    flex: 8.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  footer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuContainer: {
    flex: 1,
    // marginVertical: 0,
    flexDirection: 'column',
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerTitle: {
    // flex: 1,
    color: 'black',
    // fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    marginBottom: 31,
  },
});
