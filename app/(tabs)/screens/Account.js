import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Account = () => {
  return (
    <View style={styles.account}>
      <Text>Account</Text>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  account:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})