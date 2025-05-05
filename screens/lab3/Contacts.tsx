import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from '../../components/ContactListItem';
import { fetchContactsError, fetchContactsLoading, fetchContactsSuccess } from '../../store';
import { fetchContacts } from '../../utils/api';

export default function Contacts({ navigation }: any) {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state: any) => state.contacts);

  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then((data) => dispatch(fetchContactsSuccess(data)))
      .catch(() => dispatch(fetchContactsError()));
  }, []);

  const renderItem = ({ item }: any) => (
    <ContactListItem
      name={item.name}
      avatar={item.avatar}
      phone={item.phone}
      onPress={() => navigation.navigate('Profile', { contact: item })}
    />
  );

  const sortedContacts = contacts.slice().sort((a: any, b: any) => a.name.localeCompare(b.name));

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={styles.error}>Lỗi khi tải danh sách liên hệ.</Text>}
      {!loading && !error && (
        <FlatList
          data={sortedContacts}
          keyExtractor={(item) => item.phone}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
