import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { users } from './userContactInfo'
import ContactItem from '../../components/ContactItem'
import { styles } from './style'

const ContactListScreen = () => {
  const renderItem = ({item}) => <ContactItem name={item.name} email={item.email}/>
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      ListHeaderComponent={<Text style={styles.heading}>Contact List</Text>}
    />
  )
}

export default ContactListScreen