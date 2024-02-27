
import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CategoryGridTile from '../constant/CategoryGridTile';


import { CATEGORIES } from '../data/dummy-data';
import { TouchableOpacity } from 'react-native-gesture-handler';

import color from '../constant/color';




function CategoriesScreen(props) {


  const renderGridItem = (itemData) => {
    console.log(itemData)

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })
        }
        }
      />


    );
  }


  return (
    // <View style={styles.screen}>
    //   <Text>CategoriesScreen</Text>
    //   <Button title="Go To Meals... " onPress={()=>{
    //     props.navigation.navigate('CategoryMeals')
    //   }}/>
    // </View>

    <FlatList numColumns={2}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem} />
  );
}


CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  // headerStyle:{
  //   backgroundColor:'#364365',
  // },
  // headerTintColor:'white'
}

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },

})

export default CategoriesScreen;
