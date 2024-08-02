import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const GradientIcons = () => {
  return (
    <LinearGradient
      colors={['#1EBAEB', '#1A7AC4']}
      style={styles.gradientBackground}
    >
      <View style={styles.iconContainer}>
        <AntDesign name="arrowleft" size={24} color="white" style={styles.icon} />
        <AntDesign name="arrowright" size={24} color="white" style={styles.icon} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    padding: 20, // Adjust as needed
    borderBottomLeftRadius: 20, // Adjust as needed
    borderBottomRightRadius: 20, // Adjust as needed
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
});

export default GradientIcons;
