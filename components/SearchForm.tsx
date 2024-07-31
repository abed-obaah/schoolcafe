import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchForm = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
    backgroundColor: 'rgba(217, 217, 217, 0.37)', // Adjusted background color with opacity
    paddingHorizontal: 20,
    borderRadius: 50, // Optional: add some border radius if needed
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
