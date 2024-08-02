import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PostCard from '@/components/PostCard';
import DetailsSection from '@/components/School/DetailsSection'; // Adjust the path as needed
import { detailsData } from '@/components/School/detailsData';

const ProfilePage = ({ profile, tabs, team }) => {
  const [activeButton, setActiveButton] = useState('Posts');
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
    // Add more posts here
  ];
  
  return (
    <ScrollView style={styles.container}>
      {/* Profile header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',}}
          style={styles.coverImage}
        />
        <View style={styles.profileContainer}>
            <View> 
                <Image
            source={{ uri: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' }}
            style={styles.profileImage}
          />
          <Text>Delta state University</Text>
          <Text>@delsuHQ</Text>
          </View>
         
          <View style={styles.profileDetails}>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-around'}}>
            <MaterialIcons style={styles.nameText} name="more-horiz" size={24} color="#818D96" />
            {/* <MaterialIcons style={styles.nameText} name="more-horiz" size={24} color="black" /> */}
            </View>
            
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

     

      {/* Description list */}
      <View style={styles.descriptionContainer}>

            <View  style={styles.fieldContainer}>
                <Text style={styles.fieldLabel}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit incidunt, at quibusdam hic perferendis, porro vel, voluptas voluptate aperiam eveniet vitae modi consectetur deleniti eius adipisci magnam! Praesentium, laboriosam labore.</Text>
            </View>
            
        <View style={styles.aboutContainer}>
              <View style={styles.buttonContainer}>
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
                  activeButton === 'About' && styles.activeButton,
                ]}
                onPress={() => setActiveButton('About')}
              >
                <Text
                  style={[
                    styles.buttonText,
                    activeButton === 'About' && styles.activeButtonText,
                  ]}
                >
                  About
                </Text>
              </TouchableOpacity>
          
              <TouchableOpacity
                style={[
                  styles.button,
                  activeButton === 'Contact info' && styles.activeButton,
                ]}
                onPress={() => setActiveButton('Contact info')}
              >
                <Text
                  style={[
                    styles.buttonText,
                    activeButton === 'Contact info' && styles.activeButtonText,
                  ]}
                >
                  Contact info
                </Text>
              </TouchableOpacity>
              
            </View>
        </View>


        {/* Conditional rendering based on active tab */}
      <View style={styles.contentContainer}>
        {activeButton === 'Posts' && (
          <View style={styles.postsContainer}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </View>
        )}
        {activeButton === 'About' && (
          <View style={styles.aboutContainer}>
            {detailsData.map((item, index) => (
                <DetailsSection
                  key={index}
                  iconName={item.iconName}
                  mainText={item.mainText}
                  subText={item.subText}
                />
              ))}
          </View>
        )}
        {activeButton === 'Contact info' && (
          <View style={styles.contactContainer}>
            <Text style={styles.fieldLabel}>Contact Information</Text>
            <Text style={styles.fieldValue}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reprehenderit incidunt, at quibusdam hic perferendis, porro vel, voluptas voluptate aperiam eveniet vitae modi consectetur deleniti eius adipisci magnam! Praesentium, laboriosam labore.</Text>
          </View>
        )}
      </View>
      </View>

      

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 16,
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    justifyContent:'space-between'
    
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#ffffff',
    marginRight: 16,
    marginTop: -70, // Adjusting to lift profile image
    // marginBottom: 16,
  },
  profileDetails: {
    // flex: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: -10,
   
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#1972BF',
    paddingVertical: 3,
    paddingHorizontal: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1972BF',
    marginRight: 8,
  },
  buttonText: {
    fontSize: 14,
    color: '#ffffff',
  },
  tabsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#ff5c5c',
  },
  descriptionContainer: {
    marginHorizontal: 16,
  },
  fieldContainer: {
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555555',
  },
  fieldValue: {
    fontSize: 14,
    color: '#333333',
  },
  aboutContainer: {
    marginTop: 16,
  },
  aboutLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555555',
  },
  aboutText: {
    fontSize: 14,
    color: '#333333',
  },
  teamContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  teamTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555555',
    marginBottom: 8,
  },
  teamMember: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    marginBottom: 8,
  },
  teamImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  teamDetails: {
    flex: 1,
  },
  teamName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  teamRole: {
    fontSize: 12,
    color: '#888888',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom:8
  },
  button: {
    backgroundColor: '#d9d9d959',
    paddingVertical: 3,
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
});

export default ProfilePage;
