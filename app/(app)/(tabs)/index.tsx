import React from 'react';
import { View, Text, Image, StyleSheet,StatusBar } from 'react-native';
import logo from '@/assets/icons/clearLogo.png'; // Path to your main logo
import smallIcon from '@/assets/icons/verify.png'; // Path to your small icon
import Search from 

const HomePage = () => {
  return (
      <View style={styles.container}>
        <StatusBar 
                barStyle="light-content" // Status bar text color
                backgroundColor="black"  // Status bar background color
            />
          <View style={styles.homepage}>
              <View style={styles.imageContainer}>
                  <Image source={logo} style={styles.logo} />
                  <Image source={smallIcon} style={styles.smallIcon} />
              </View>
          </View>
          <View style={styles.section}>
              <Text style={styles.sectionText}>Second Section</Text>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  homepage: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center', // Center vertically
      alignItems: 'center',     // Center horizontally
  },
  imageContainer: {
      flexDirection: 'row',    // Align items side by side
      alignItems: 'center',    // Center items vertically
      width: '100%',           // Full width
      position: 'relative',    // Needed for positioning small icon absolutely
      marginTop: -250
  },
  logo: {
      width: 80,  // Size of the main logo
      height: 80,
      position: 'absolute',
      left: '50%',    // Center the logo horizontally
      transform: [{ translateX: -35 }], // Adjust by half the logo width to center it
  },
  smallIcon: {
      position: 'absolute',
      right: 10,    // Align small icon to the right edge
      bottom: -20,   // Align small icon to the bottom of the imageContainer
      width: 40,   // Size of the small icon
      height: 40,
  },
  section: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  sectionText: {
      color: 'black',
  },
});

export default HomePage;