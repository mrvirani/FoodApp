import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { HeaderButton } from 'react-navigation-header-buttons'

import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeaderButton = (props) => {
  return (

    <HeaderButton {...props} IconComponent={Icon} iconSize={23} color={'black'}/> 

    // <View>
    //   <Text>HeaderButton</Text>
    //   <Icon name="rocket" size={30} color="#900" />
    // </View>
  )
}


const styles = StyleSheet.create({})

export default CustomHeaderButton
