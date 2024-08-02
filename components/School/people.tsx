import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const peopleData = [
  {
    id: '1',
    name: 'John Doe',
    company: 'Company A',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Jane Smith',
    company: 'Company B',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Jane Smith',
    company: 'Company B',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    name: 'Jane Smith',
    company: 'Company B',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '5',
    name: 'Jane Smith',
    company: 'Company B',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '6',
    name: 'Jane Smith',
    company: 'Company B',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '7',
    name: 'Jane Smith',
    company: 'Company B',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '8',
    name: 'Jane Smith',
    company: 'Company B',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '9',
    name: 'Jane Smith',
    company: 'Company B',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more people data as needed
];

const PersonItem = ({ id, name, company, imageUrl, onPress }) => (
    <View style={styles.personContainer}>
      <Image source={{ uri: imageUrl }} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.companyText}>{company}</Text>
      </View>
      <TouchableOpacity onPress={() => onPress(id)}>
        <MaterialIcons name="more-horiz" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

 

const People = () => {
    const router = useRouter();

    const handlePress = (id: any) => {
      router.push({ pathname: '/userDetail/', params: { userId: id } });
    };
  return (
    <View style={styles.container}>
      <FlatList
        data={peopleData}
        renderItem={({ item }) => (
            <PersonItem
            id={item.id}
            name={item.name}
            company={item.company}
            imageUrl={item.imageUrl}
            onPress={handlePress}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 9,
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default People;
