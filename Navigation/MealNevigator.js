

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';

// import { BottomTabBar } from 'react-navigation-tabs'

import CategoriesScreen from '../Screen/CategoriesScreen'
import CategoriesMealScreen from '../Screen/CategoriesMealScreen'
import MealDetailsScreen from '../Screen/MealDetailsScreen'
import FavouriteItemScreen from '../Screen/FavouriteItemScreen'

import { Modal, Platform } from 'react-native'


// const TabBarComponent = (props) => <BottomTabBar {...props} />;

const MealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoriesMealScreen
    },
    MealDetails: MealDetailsScreen
}, {
    mode: 'Modal',
    // initialRoundName:'MealDetails',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '#364365' : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : '#364365'
    }
});


// const MealsFavTabNavigator = createBottomTabNavigator({


//     Meals: MealNavigator,
//     Favorites: FavouriteItemScreen

// }, {

// });


// const TabScreens = createBottomTabNavigator(
//     {
//         // other screens
//         Meals: MealNavigator,
//         Favorites: FavouriteItemScreen
//     },
//     {
//         tabBarComponent: (props) => (
//             <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
//         ),
//     }
// );

// const MealsFavTabNavigator = createBottomTabNavigator(
//     {
//       Meals: MealNavigator,
//       Favourites: FavouriteItemScreen,
//     },
//     {
//       tabBarOptions: {
//         activeTintColor: 'blue', // Set your preferred active tab color
//         inactiveTintColor: 'gray', // Set your preferred inactive tab color
//       },
//     }
//   );

export default createAppContainer(MealNavigator)