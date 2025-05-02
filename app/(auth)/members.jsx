import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MEMBERS = [
  { id: '1', name: 'Jerwin Noval', role: 'Project Manager' },
  { id: '2', name: 'Noli Casas', role: 'Developer' },
  { id: '3', name: 'John Gerry Frias', role: 'Designer' },
  { id: '4', name: 'Mary Grace Rosell', role: 'QA Tester' },
  { id: '5', name: 'Franz Coyoca', role: 'DevOps Engineer' },
  { id: '6', name: 'Leonides Conde', role: 'Security Analyst' },
];

const MemberListView = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.memberName}>{item.name}</Text>
      <Text style={styles.memberRole}>{item.role}</Text>
    </View>
  );

  return (
    <FlatList
      data={MEMBERS}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: 14,
    color: '#666',
  },
});

export default MemberListView;