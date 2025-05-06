import { StyleSheet, Text, View } from 'react-native'
import { Tabs, Redirect } from "expo-router";

const TabsLayout = () => {
  return (
    
    <>
      <Tabs>
        <Tabs.Screen name="home" options={{headerShown:false}}/>
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})