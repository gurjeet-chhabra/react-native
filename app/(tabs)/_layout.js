import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Tabs} from 'expo-router'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Settings from './screens/Settings'
import Account from './screens/Account'
import Screen1 from './screens/screen1'
import Home from './screens/Home'
import index from './index'
import {BottomNavigation} from 'react-native-paper'

const homeName = () => <Home/>
const accountName = () => <Account/>
const settingName = () =>  <Settings/>


const layout = () => {

  const [index , setIndex] = useState(0);
  const [routes] = useState([
    {key:'home' , title: 'Home' , focusedIcon: 'home' , unfocusedIcon:'home-outline'},
    {key:'account' , title: 'Account' , focusedIcon: 'account'},
    {key:'settings' , title: 'Settings' , focusedIcon:'cog'}
  ]) 

  const renderScene = BottomNavigation.SceneMap({
     home:homeName,
     account: accountName,
     settings: settingName,
  }) 
  return (
     
    <BottomNavigation 
    navigationState={{index , routes}}
    onIndexChange={setIndex}
    renderScene={renderScene}/>

  )
}

export default layout

const styles = StyleSheet.create({})