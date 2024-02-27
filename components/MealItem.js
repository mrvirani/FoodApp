import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MealItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View style={styles.mealItem}>
                <View style={{...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground  source={{uri: props.image}} style={styles.bgImg}>
                    <Text style={styles.title} numberOfLines={1}> {props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow,...styles.mealDetails}}>
                     <Text>{props.duration}</Text>
                     <Text>{props.complexity}</Text>
                     <Text>{props.affordabilty}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    mealItem:{
            height:200,
            width:'100%',
            backgroundColor:'#d7d6d9 ',
            borderRadius:10,
            overflow:'hidden',
            marginVertical:10,
            borderColor:'black',
            borderWidth:1
    },

    mealRow:{
        flexDirection:'row '
    },

    mealHeader:{
        height:'85%'
    },

    mealDetails:{
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between',
        marginVertical:5
    },
    bgImg:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },

    title:{
        fontSize:18,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.6)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign:'center'
    }
})

export default MealItem