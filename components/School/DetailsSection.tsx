import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DetailsSection = ({ iconName, mainText, subText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={iconName} size={24} color="black" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{mainText}</Text>
        {subText && <Text style={styles.subText}>{subText}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center', // Ensures icon is centered vertically
  },
  icon: {
    marginRight: 6,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft:6
  },
  mainText: {
    fontSize: 12,
    fontWeight: '500',
  },
  subText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default DetailsSection;
