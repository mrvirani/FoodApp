
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function FilterItemScreen() {
 

  return (
    <View style={styles.screen}>
      <Text>FilterItemScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default FilterItemScreen;
