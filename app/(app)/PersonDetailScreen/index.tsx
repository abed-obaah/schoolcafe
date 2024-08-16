// app/PersonDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter, useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PersonDetailScreen() {
  const { name, email, head, imageUrl, nameImage, describe, acknowldge } = useLocalSearchParams();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
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
        <Text>{describe}</Text>
        <View style={{marginTop:10}}>
             <Text>{acknowldge}</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',  // Full background color white
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',  // Container background color white
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
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
    marginBottom: 20,
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

