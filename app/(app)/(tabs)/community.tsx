// TabTwoScreen.js
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, Image, Platform, SafeAreaView, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import smallIcon from '@/assets/icons/verify.png'; // Path to your small icon
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Badge from '@/components/School/index'; 
import Schools from '@/components/School/schools'
import University  from '@/components/School/university'
import People from '@/components/School/people';
import Svg, { Circle } from 'react-native-svg';
import PostCard from '@/components/PostCard';



export default function TabTwoScreen() {
  const [selectedBadge, setSelectedBadge] = useState('Saved');
  const [activeButton, setActiveButton] = useState('all');
  const handleMorePress = () => {
    setModalVisible(true);
  };

  const posts = [
    {
      id: '1',
      universityName: 'Delta state university',
      postedTime: 'Posted 23hrs ago',
      title: 'Important information about SchoolCafe.ng',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      reactions: [
        { id: '1', uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { id: '2', uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { id: '3', uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
      ],
      reactionText: 'Reaction from Jeff and 23 others',
    },
    {
      id: '2',
      universityName: 'Delta state university',
      postedTime: 'Posted 23hrs ago',
      title: 'Important information about SchoolCafe.ng',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      reactions: [
        { id: '1', uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { id: '2', uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { id: '3', uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
      ],
      reactionText: 'Reaction from Jeff and 23 others',
    },
    {
      id: '3',
      universityName: 'Delta state university',
      postedTime: 'Posted 23hrs ago',
      title: 'Important information about SchoolCafe.ng',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      reactions: [
        { id: '1', uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { id: '2', uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { id: '3', uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
      ],
      reactionText: 'Reaction from Jeff and 23 others',
    },
    // Add more posts here
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the School Cafe 
        Community
        </Text>
        <Image source={smallIcon} style={styles.smallIcon} />
      </View>



      <View style={styles.containers}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.inputContainer}>
            <MaterialIcons name="search" size={20} color="#818D96" style={styles.icon} />
            <TextInput
              placeholder="Search Contents"
              style={styles.input}
              placeholderTextColor="#818D96"
            />
            {/* <MaterialIcons name="search" size={20} color="#818D96" style={styles.icon} /> */}
          </View>
        </KeyboardAvoidingView>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'all' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('all')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'all' && styles.activeButtonText,
            ]}
          >
           9236 Members
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'Education' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('Education')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'Education' && styles.activeButtonText,
            ]}
          >
            9488 Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'Finance' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('Finance')}
        >
          <Svg height="6" width="6" viewBox="0 0 6 6" style={styles.svgStyle}>
                 <Circle cx="3" cy="3" r="3" fill="#22c55e" />
            </Svg>
          <Text
            style={[
              styles.buttonText,
              activeButton === 'Finance' && styles.activeButtonText,
            ]}
          >
            
          3267 Online
          </Text>
        </TouchableOpacity>
       
      </View>

      <ScrollView>
  <View style={styles.postsContainer}>
    {posts.map((post) => (
      <PostCard key={post.id} post={post} onMorePress={handleMorePress} />
    ))}
  </View>
</ScrollView>

    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', // Adjust based on your theme
    paddingVertical: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distributes space between Text and Image
    paddingHorizontal: 10,
    marginBottom:30
  },
  headerText: {
    fontSize: 24, // Adjust as needed
    fontWeight: 'bold',
  },
  smallIcon: {
    width: 40, // Size of the small icon
    height: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(217, 217, 217, 0.37)',
    // paddingHorizontal: 20,
    borderRadius: 50,
    padding: 10,
  },
  icon: {
    marginRight: 10,
    color: "white",
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
    fontSize: 14,
  },
  containers: {
    alignItems: 'center',
  },
  containerBadges:{
  marginTop: 20,
  // flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start', 
  },
  containerBagesText:{
    paddingHorizontal: 10,
  },

  buttonContainer: {
    marginTop: 20,
    marginBottom:30,
    flexDirection: 'row',
    justifyContent: 'space-between', // Evenly space the buttons
    width: '100%',
    alignSelf: 'flex-start', // Optional: align the button container to the start
  },
  button: {
    backgroundColor: '#d9d9d959',
    paddingVertical: 5,
    borderRadius: 5,
    width: 120, // Fixed width for all buttons
    alignItems: 'center', // Center the contents inside the button
    marginHorizontal: 5, // Add horizontal space between buttons
    flexDirection: 'row', // Arrange icon and text side by side
    paddingHorizontal: 10, // Adjust padding for better alignment
  },
  buttonText: {
    color: '#818D96',
    fontSize: 13,
    textAlign: 'center', // Center the text inside the button
    flex: 1, // Allow text to take remaining space after the icon
  },
  activeButton: {
    backgroundColor: '#1972BF', // bg-indigo-500
    fontSize: 14, // text-sm
    fontWeight: 'bold', // font-semibold
    shadowColor: '#000', // shadow-sm
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  activeButtonText: {
    color: '#ffffff', // text-white
  },
  svgStyle: {
    height: 6,         // h-1.5 equivalent
    width: 6,          // w-1.5 equivalent
    marginRight: 6,    // Add space between SVG and text
  },
});
