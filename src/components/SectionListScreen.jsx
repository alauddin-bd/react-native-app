import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const itemList = [
  {
    title: "Fruits",
    data: [
      {id: 1, name: "Mango"},
      {id: 2, name: "Apple"},
      {id: 3, name: "Strawberry"}
    ]
  },
  {
    title: "Vegetables",
    data: [
      {id: 4, name: "Patato"},
      {id: 5, name: "Carrot"},
      {id: 6, name: "Tomato"}
    ]
  }
]

const SectionListScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
  const renderSectionHeader = ({section}) => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{section.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={itemList}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    paddingTop: 15
  },
  item: {
    backgroundColor: "#add8e6",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 18
  },
  header: {
    backgroundColor: '#90ee90',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default SectionListScreen