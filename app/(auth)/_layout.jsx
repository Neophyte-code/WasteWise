import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen name='sign-in' options={{headerShown:false}}/>
      <Stack.Screen name='sign-up' options={{headerShown:false}}/>
      {/* <Stack.Screen name='members' options={{headerShown:true}} style={styles.memberContainer}/> */}
    </Stack>
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({

  memberContainer: {
    textAlign: "center",
  }

});