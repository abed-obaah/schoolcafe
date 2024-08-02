import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const DidYouKnow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Did you {'\n'}know?
          {/* <Text style={styles.emoji}> 🤔</Text> */}
          <Image source={require('@/assets/icons/know.png')} style={styles.emoji} />
        </Text>
      </View>
      <Text style={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur <Text style={styles.highlight}>adipiscing</Text> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <Text style={styles.highlight}>enim ad.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6EC1E4', // Light blue background color
    borderRadius: 10,
    padding: 20,
    margin: 10,
    marginTop:-60
  },
  headerContainer: {
    backgroundColor: '#1E90FF', // Darker blue background color
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginTop: -50,
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  emoji: {
   width:30,
   height:30
  },
  bodyText: {
    color: '#fff',
    fontSize: 16,
    textAlign:'center'
  },
  highlight: {
    color: '#FFD700', // Yellow color for highlighted text
  },
});

export default DidYouKnow;
