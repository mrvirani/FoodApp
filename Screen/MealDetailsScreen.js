
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';

import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import HeaderButton from '../components/HeaderButton'

function MealDetailsScreen (props) {
 

  const MealID = props.navigation.getParam('MealID')

   const selectMeal = MEALS.find(meal => meal.id == MealID)
   console.log(selectMeal.title)

  return (
    <View style={styles.screen}>
      <Text>{selectMeal.title}</Text>
      

      <Button title="goto HOme page" onPress={()=>{
        props.navigation.pop()
      }} />
    </View>
  );
}

MealDetailsScreen.navigationOptions = (navigationData) =>{
  const MealID = navigationData.navigation.getParam('MealID')

   const selectMeal = MEALS.find(meal => meal.id == MealID)

   return {
    headerTitle: selectMeal.title,
    headerRight:()=>(
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Favorite"
        iconName="star"
        onPress={() => {
          console.log("ok done bro")
          // Handle your favorite action here
        }}
      />
    </HeaderButtons>
    ) 
   }
}


// MealDetailsScreen.navigationOptions = {
//   headerTitle: 'Meal Details',
//   // headerStyle:{
//   //   backgroundColor:'#364365',
//   // },
//   // headerTintColor:'white'
// }


const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default MealDetailsScreen;
