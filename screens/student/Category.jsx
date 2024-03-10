import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.navigate("BusinessBottomTab")}>
      <Text>Category</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Category