// app/PersonDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PersonDetailScreen() {
  const { name, email, head, imageUrl, nameImage,describe } = useLocalSearchParams();


  const handleBackPress = () => {
    router.back();
  };
  
  return (
    <View style={styles.container}>
         <View style={styles.headers}>
            <TouchableOpacity onPress={handleBackPress}>
              <Ionicons name="arrow-back" size={24} color="#1972BF" />
            </TouchableOpacity>
            <Text style={styles.titles}>{head}</Text>
          </View>


      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{head}</Text>
      <View style={styles.profileContainer}>
        <Image source={{ uri: nameImage }} style={styles.profileImage} />
        <Text>{name}</Text>
      </View>
      <Text>Email: {email}</Text>
      <Text> {describe}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  headers: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 38,
  },
  titles: {
    flex: 1,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
