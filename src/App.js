import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import './icon';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Home from './Generator';
// import Countup from './Countup';
// import Hooks from './hooks';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text:{
    fontSize: 40
  }
})
export default App;
