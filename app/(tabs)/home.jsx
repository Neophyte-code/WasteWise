import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import image1 from '@/assets/images/homeImage.jpg';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          <Text>Home</Text>
          <View style={styles.mainContainer}>
          <Image style={styles.image} source={ image1 } />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

  mainContainer: {
    margin: 200
  },

  image: {
    height: 100,
    width: 100,
  }
})