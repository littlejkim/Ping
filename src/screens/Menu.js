import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from '../constants/styles';
import MenuNavigation from '../navigation/MenuNavigation';
import ActionCreator from '../actions/index';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <View style={styles.menuContainer}>
        <MenuNavigation />
        <View style={styles.footer}>
          <Text>{this.props.count}</Text>
          <CustomButton
            buttonColor={'#023e71'}
            title={'다음'}
            onPress={() => this.props.menuAdd(1)}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    menuAdd: num => {
      dispatch(ActionCreator.menuAdd(num));
    },
    menuDelete: num => {
      dispatch(ActionCreator.menuDelete(num));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
