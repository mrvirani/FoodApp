
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

function FavouriteItemScreen() {
 

  return (
    <View style={styles.screen}>
      <Text>FavouriteItemScreen</Text>
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

export default FavouriteItemScreen;
