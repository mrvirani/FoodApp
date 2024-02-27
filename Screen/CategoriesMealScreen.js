
import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,  
  View,
} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';
import MealDetailsScreen from './MealDetailsScreen';

function CategoriesMealScreen(props) {

  const catId = props.navigation.getParam('categoryId')

  // const selectedCategory = CATEGORIES.find(cat => cat.id == catId)


  //create a new array which contain catId from MEALS and it,s store it's index on new array
  const displayMeals = MEALS.filter(
    meal=> meal.categoryIds.indexOf(catId) >=0
  )


  //flatlist na data mathi je pass thase temathi aa render karse title
  const renderMealItems = itemData => {
    return ( 
      <MealItem title={itemData.item.title}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordabilty={itemData.item.affordabilty}
      image = {itemData.item.imageUrl}
      onSelectMeal={()=>{ props.navigation.navigate('MealDetails',{MealID:itemData.item.id})}}
      />
      // <View><Text>{itemData.item.title}</Text></View>
    )

  }

  return (

    <View style={styles.screen}>

    {/* // we use latest version so no need to add keyExtractor */}
    <FlatList  data={displayMeals}  renderItem={renderMealItems} style={{width:'100%',padding:15}} />  






      {/* this will show you selected id's  title in center */}
      {/* <Text>CategoriesMealScreen</Text>
      <Text>{selectedCategory.title} </Text>
      <Button title="Go to Details" onPress={
        () => props.navigation.navigate('MealDetails')} /> */}
    </View>
  );
}


// navigationOption is used for header name or styles
// this one is out side the   CategoriesMealScreen   function so not access selectedCategory so, we 
CategoriesMealScreen.navigationOptions = (navigationData) => {

  const catId = navigationData.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(cat => cat.id == catId)

  return {  
    headerTitle: selectedCategory.title,

  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CategoriesMealScreen;
