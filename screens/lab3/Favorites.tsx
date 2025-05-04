import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ContactThumbnail from '../../components/ContactThumbnail';
import {
  fetchContactsError,
  fetchContactsLoading,
  fetchContactsSuccess,
} from '../../store';
import { fetchContacts } from '../../utils/api';

export default function Favorites({ navigation }: any) {
  const dispatch = useDispatch();
   const { contacts, loading, error } = useSelector((state: any) => state.contacts);

  useEffect(() => {
    if (!contacts.length) {
      dispatch(fetchContactsLoading());
      fetchContacts()
        .then((data) => dispatch(fetchContactsSuccess(data)))
        .catch(() => dispatch(fetchContactsError()));
    }
  }, []);

  const favorites = contacts.filter((contact: any) => contact.favorite);

  const renderItem = ({ item }: any) => (
    <ContactThumbnail
      avatar={item.avatar}
      onPress={() => navigation.navigate('Profile', { contact: item })}
    />
  );

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={styles.error}>Lỗi khi tải danh sách yêu thích.</Text>}
      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.phone}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  list: {
    alignItems: 'center',
    paddingVertical: 16,
  },
});
