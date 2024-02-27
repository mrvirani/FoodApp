
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

import MealNevigator from './Navigation/MealNevigator';

import 'react-native-gesture-handler';




import CategoriesScreen from './Screen/CategoriesScreen';
import CategoriesMealScreen from './Screen/CategoriesMealScreen';
import FavouriteItemScreen from './Screen/FavouriteItemScreen';
import FilterItemScreen from './Screen/FilterItemScreen';
import MealDetails from './Screen/MealDetailsScreen';
import { enableScreens } from 'react-native-screens';


// enableScreens();




function App() {
 
 
  return (
    <MealNevigator/>
    
    
  );
}

const styles = StyleSheet.create({
  screen:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  }
})

export default App;
