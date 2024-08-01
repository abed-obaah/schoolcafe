import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to install this package

const GradientButton = ({ onPress, label, showIcon = true }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <LinearGradient
        colors={['#1EBCEC', '#1972BF']} // Gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>{label}</Text>
          {showIcon && <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 9,
    overflow: 'hidden', // Ensure the gradient doesn't overflow the button
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GradientButton;
