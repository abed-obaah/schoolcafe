// TabTwoScreen.js
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, Image, Platform, SafeAreaView, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

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



export default function TabTwoScreen() {
  const [selectedBadge, setSelectedBadge] = useState('Saved');


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore</Text>
        <Image source={smallIcon} style={styles.smallIcon} />
      </View>

      <View style={{ paddingVertical: 13,marginLeft:10 }}>
        <Text style={{ fontSize: 16, fontWeight: '400', }}>
          Discover the right school through SchoolCafe’s directory on the Platform.
          <Text style={{ color: '#1972BF' }}> Add your school </Text>
        </Text>
      </View>

      <View style={styles.containers}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.inputContainer}>
            <MaterialIcons name="search" size={20} color="#9e9e9e" style={styles.icon} />
            <TextInput
              placeholder="Search by City, University, Course"
              style={styles.input}
              placeholderTextColor="black"
            />
            <MaterialIcons name="search" size={20} color="#9e9e9e" style={styles.icon} />
          </View>
        </KeyboardAvoidingView>
      </View>

      <View style={styles.containerBadge}>
        <TouchableOpacity onPress={() => setSelectedBadge('Saved')}>
          <Badge
            text="Saved"
            bgColor={selectedBadge === 'Saved' ? "#D9F6FF" : "transparent"}
            textColor={selectedBadge === 'Saved' ? "#4B5563" : "black"}
            ringColor="#ffffff"
            icon="save-outline"
            iconLibrary="Ionicons"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedBadge('University')}>
          <Badge
            text="University"
            bgColor={selectedBadge === 'University' ? "#D9F6FF" : "transparent"}
            textColor={selectedBadge === 'University' ? "#4B5563" : "black"}
            ringColor="#ffffff"
            icon="graduation"
            iconLibrary="SimpleLineIcons"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedBadge('People')}>
          <Badge
            text="People"
            bgColor={selectedBadge === 'People' ? "#D9F6FF" : "transparent"}
            textColor={selectedBadge === 'People' ? "#4B5563" : "black"}
            ringColor="#ffffff"
            icon="people"
            iconLibrary="Ionicons"
          />
        </TouchableOpacity>
      </View>

      {selectedBadge === 'Saved' && <Schools />}
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
    paddingHorizontal: 20,
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
  containerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Aligns badges to the left
    marginTop: 20, // Adjust this value to move badges closer to the search input
  },
});
