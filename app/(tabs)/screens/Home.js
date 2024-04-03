import { FlatList, SafeAreaView, StyleSheet,  View } from 'react-native'
import React from 'react'
import {Card , Text , Icon} from 'react-native-paper'

const Home = () => {

  const data = [
    { 
      title: 'first item',
      content: 'content for first item will show here',
    },
    { 
      title: 'first second',
      content: 'content for seconf item will show here',
    },
    { 
      title: 'third item',
      content: 'content for third item will show here',
    },
    { 
      title: 'next item',
      content: 'content for next item will show here',
    },
    { 
      title: 'last item',
      content: 'content for last item will show here',
    },
  ]
  return (
    <SafeAreaView style={styles.home}>
      <Text variant='displayMedium' style={styles.title}>home</Text>
      <FlatList data={data} 
      renderItem={(element) => (
        <Card style={styles.body}>
          <Card.Content>
          <Text variant='titleLarge'>{element.item.title}</Text>
          <Text variant='bodyMedium'>{element.item.content}</Text>
          <Card.Actions style={styles.actions}>
          <Icon source='heart' color='red' size={20}/>
          <Icon source='message-outline' size={20}/>
          </Card.Actions>
          </Card.Content>
        </Card>
  )}/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  home:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
  },
  title:{
   paddingTop:50,
  },
  body:{
    marginTop:20,
  },
  actions:{
   padding:20,
  }
})