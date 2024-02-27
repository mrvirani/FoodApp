import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

function CategoryGridTile(props) {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect} >
        <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
          <Text style={{ textAlign: 'center', marginBottom: 10 }}>{props.title}</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    padding: 10,
    // backgroundColor: '#D6DFE1',


  },

  container: {
    height: 150,
    borderRadius: 10,
    elevation: 1,
    // shadowColor:'black',
    // shadowOpacity:0.26,
    justifyContent: 'flex-end'
  }

})


export default CategoryGridTile