import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f8f8f8', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerText: {
    fontSize: 20, // Font size of the header text
    fontWeight: 'bold', // Bold text
  },
});

export default CustomHeader;