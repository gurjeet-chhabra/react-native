import { StyleSheet, View } from 'react-native'
import React from 'react'
import {router} from 'expo-router'
import {IconButton , Text , Button} from 'react-native-paper'

const index = () => {
  return (
    <View style={styles.container}>
       <Text variant='displayMedium'>home page</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
})