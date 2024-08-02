import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons, FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const ProfilePage = () => {
  const handleBackPress = () => {
    router.back();
  };
  const [activeButton, setActiveButton] = useState('about');
  
  const handlePress = () => {
    router.push({ pathname: '/userDetail/Profile',
        //  params: { userId: id } 
        });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="#1972BF" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile Settings</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.profileImage} />
      </TouchableOpacity>
     
      <Text style={styles.nameText}>Jeremiah Omonefe</Text>
      <Text style={styles.companyText}>VC at Fame Academy</Text>

      <View style={styles.socialMediaContainer}>
        <TouchableOpacity>
          <FontAwesome name="instagram" size={24} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="twitter" size={24} color="#00acee" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="linkedin" size={24} color="#0e76a8" />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'about' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('about')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'about' && styles.activeButtonText,
            ]}
          >
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'Posts' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('Posts')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'Posts' && styles.activeButtonText,
            ]}
          >
            Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'Comments' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('Comments')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'Comments' && styles.activeButtonText,
            ]}
          >
            Comments
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
                <Ionicons name="calendar-outline" size={20} color="gray" />
                <Text style={[styles.infoText,{marginLeft:10}]}>Member since February 4, 2024</Text>
        </View>
     
        
        <View style={{flexDirection:'row',alignItems:'center'}}>
                <Ionicons name="time-outline" size={20} color="gray" />
                <Text style={[styles.infoText,{marginLeft:10}]}>Last seen 56 minutes ago</Text>
        </View>
        <View>
            <Text style={styles.bold}>Bio</Text>
            <Text style={styles.test}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</Text>
        </View>
        <View style={{marginTop:10}}>
            <Text style={styles.bold}>Location</Text>
            <Text style={styles.test}>Delta state, Nigeria</Text>
        </View>
        <View style={{marginTop:10}}>
            <Text style={styles.bold}>Birthday</Text>
            <Text style={styles.test}>September, 11</Text>
        </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 38,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginBottom: 16,
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  companyText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 16,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  button: {
    backgroundColor: '#d9d9d959',
    paddingVertical: 4,
    borderRadius: 5,
    width: 100, // Set fixed width for all buttons
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    color: '#818D96',
    fontSize: 16,
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
  infoContainer: {
    alignSelf: 'flex-start', // Align the container to the start (left) of its parent
    marginTop: 16, // Add margin if needed
  },
  infoText: {
    fontSize: 12,
    color: 'gray',
    marginVertical:20,
    fontWeight:'400'
  },
  test:{
    color:'#2C2C2C',
    fontWeight:'400'
  },
  bold:{
    fontWeight:'500'
  }
});

export default ProfilePage;
