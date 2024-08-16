import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Sample data
const people = [
    {
        name: 'L. Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        head: '2024/2025 WAEC Syllabus for All Subjects | Read & Download PDF',
        nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        subjects: {
          math: 'Mathematics',
          english: 'English Language',
        //   biology: 'Biology',
          // chemistry: 'Chemistry',
          // physics: 'Physics',
          // Add more subjects as needed
        },
        describe:"Delta State University is a public institution providing a comprehensive undergraduate and graduate curriculum to approximately 3,500 students representing all of the states and 50 different countries. Dozens of degree programs on the undergraduate level provide educational opportunities in the Colleges of Arts and Sciences, Business, and Education and in the Robert E. Smith School of Nursing. Graduate programs on the master’s, educational specialist, and doctoral levels provide advanced training in a broad range of disciplines",
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'L. Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        head: '2024/2025 WAEC Syllabus for All Subjects | Read & Download PDF',
        nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        subjects: {
          math: 'Mathematics',
          english: 'English Language',
        //   biology: 'Biology',
          // chemistry: 'Chemistry',
          // physics: 'Physics',
          // Add more subjects as needed
        },
        describe:"Delta State University is a public institution providing a comprehensive undergraduate and graduate curriculum to approximately 3,500 students representing all of the states and 50 different countries. Dozens of degree programs on the undergraduate level provide educational opportunities in the Colleges of Arts and Sciences, Business, and Education and in the Robert E. Smith School of Nursing. Graduate programs on the master’s, educational specialist, and doctoral levels provide advanced training in a broad range of disciplines",
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'L. Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        head: '2024/2025 WAEC Syllabus for All Subjects | Read & Download PDF',
        nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        subjects: {
          math: 'Mathematics',
          english: 'English Language',
        //   biology: 'Biology',
          // chemistry: 'Chemistry',
          // physics: 'Physics',
          // Add more subjects as needed
        },
        describe:"Delta State University is a public institution providing a comprehensive undergraduate and graduate curriculum to approximately 3,500 students representing all of the states and 50 different countries. Dozens of degree programs on the undergraduate level provide educational opportunities in the Colleges of Arts and Sciences, Business, and Education and in the Robert E. Smith School of Nursing. Graduate programs on the master’s, educational specialist, and doctoral levels provide advanced training in a broad range of disciplines",
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'L. Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        head: '2024/2025 WAEC Syllabus for All Subjects | Read & Download PDF',
        nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        subjects: {
          math: 'Mathematics',
          english: 'English Language',
        //   biology: 'Biology',
          // chemistry: 'Chemistry',
          // physics: 'Physics',
          // Add more subjects as needed
        },
        describe:"Delta State University is a public institution providing a comprehensive undergraduate and graduate curriculum to approximately 3,500 students representing all of the states and 50 different countries. Dozens of degree programs on the undergraduate level provide educational opportunities in the Colleges of Arts and Sciences, Business, and Education and in the Robert E. Smith School of Nursing. Graduate programs on the master’s, educational specialist, and doctoral levels provide advanced training in a broad range of disciplines",
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
  // More people...
];

export default function Example() {

    const handleBackPress = () => {
        router.back();
      };

      
      const handleCardPress = (person) => {
        router.push({
          pathname: '/(app)/PersonDetailScreen/',
          params: person,
        });
      };
    
      return (
        <View style={{ backgroundColor: 'white' }}>
          <View style={styles.headerS}>
            <TouchableOpacity onPress={handleBackPress}>
              <Ionicons name="arrow-back" size={24} color="#1972BF" />
            </TouchableOpacity>
            <Text style={styles.titles}>Profile Settings</Text>
          </View>
    
          <ScrollView contentContainerStyle={styles.container}>
            {people.map((person) => (
              <TouchableOpacity key={person.email} onPress={() => handleCardPress(person)}>
                <View style={styles.card}>
                  <Image source={{ uri: person.imageUrl }} style={styles.image} />
                  <Text style={styles.title}>{person.head}</Text>
                  <View style={styles.profileContainer}>
                    <Image source={{ uri: person.nameImage }} style={styles.profileImage} />
                    <Text>{person.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            <View style={styles.endPadding} />
          </ScrollView>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        padding: 16,
        paddingVertical: 40,
        paddingBottom: 80, // Add padding to the bottom for space
      },
      card: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        height: 300, // Adjust this value to increase card height
      },
      profileContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
      },
      title: {
        fontSize: 16,
        color: '#2C2C2C',
        padding: 10,
        fontWeight: '600',
      },
      image: {
        width: '100%',
        height: '60%', // Adjust this value to control the image height
        borderRadius: 10,
        backgroundColor: '#ccc',
      },
      endPadding: {
        height: 80, // This adds extra space at the bottom of the ScrollView
      },
      headerS: {
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