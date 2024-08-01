import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchForm = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}
    >
      
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search..."
            style={styles.input}
            placeholderTextColor="#ffffff"
          />
          <MaterialIcons name="search" size={20} color="#9e9e9e" style={styles.icon} />
        </View>
     
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
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
    color: 'white',
    fontSize: 14,
  },
});

export default SearchForm;
