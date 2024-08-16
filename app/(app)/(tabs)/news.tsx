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
import News from '@/components/NewsUpdate/News'
import University  from '@/components/School/university'
import People from '@/components/School/people';
import { router } from 'expo-router';



export default function TabTwoScreen() {
  const [selectedBadge, setSelectedBadge] = useState('Saved');
  const [activeButton, setActiveButton] = useState('all');


  const trendingView = () => {
      router.push("/(app)/TrendingScreen/")
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>News and updates</Text>
        <Image source={smallIcon} style={styles.smallIcon} />
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
            All
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
            Education
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'Finance' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('Finance')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'Finance' && styles.activeButtonText,
            ]}
          >
            Finance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'Sport' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('Sport')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'Sport' && styles.activeButtonText,
            ]}
          >
            Sport
          </Text>
        </TouchableOpacity>
      </View>

     

      <View style={styles.containerBadges}>
        <Text style={styles.containerBagesText}>Popular sources</Text>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <View style={styles.containerBadge}>
              <View style={styles.imagePlaceholder}></View>
              <View style={styles.imagePlaceholder}></View>
              <View style={styles.imagePlaceholder}></View>
              <View style={styles.imagePlaceholder}></View>
              <View style={styles.imagePlaceholder}></View>
              <View style={styles.imagePlaceholder}></View>
              <View style={styles.imagePlaceholder}></View>
            </View>
          </ScrollView>
      
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:14,fontWeight:'600'}}>Trending</Text>
        <TouchableOpacity onPress={trendingView}>
            <Text style={{color:'#1972BF',fontSize:10}}>View all</Text>
        </TouchableOpacity>
        
      </View>

      {selectedBadge === 'Saved' && <News />}
      {selectedBadge === 'University' && <University />}
      {selectedBadge === 'People' && <People />}
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
  // containerBadge: {
  //   flexDirection: 'row', // Flex items side by side
  //   justifyContent: 'space-around', // Space items evenly
  //   alignItems: 'center', // Align items vertically center
  //   width: '100%', // Ensure full width
  //   padding: 10, // Optional: Add padding for spacing
  // },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Already set to space the buttons evenly
    width: '90%',
    alignSelf: 'flex-start', // Optional: center the entire button container
  },
  
  button: {
    backgroundColor: '#d9d9d959',
    paddingVertical: 5,
    borderRadius: 5,
    width: 80, // Fixed width for all buttons
    alignItems: 'center', // Center the text inside the button
    marginHorizontal: 5, // Add horizontal space between buttons
  
  },
  buttonText: {
    color: '#818D96',
    fontSize: 13,
    
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
  scrollContainer: {
    width: '100%', // Ensures the scroll area takes the full width
  },
  containerBadge: {
    flexDirection: 'row', // Flex items side by side
    alignItems: 'center', // Align items vertically center
    padding: 10, // Optional: Add padding for spacing
  },
  imagePlaceholder: {
    width: 60,  // Placeholder size
    height: 60, 
    backgroundColor: '#d9d9d9', // Placeholder color
    borderRadius: 30, // Half of width/height to make it circular
    marginRight: 10, // Add margin between placeholders
  },
});
