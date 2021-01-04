import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <Text style={styles.titleText}>Hello world</Text>
    </>
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: Colors.white,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center"
  }
  
});

export default App;
