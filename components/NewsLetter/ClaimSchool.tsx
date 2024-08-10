import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome,Ionicons,AntDesign } from '@expo/vector-icons'; // or another icon library of your choice

const EmailInput = () => {
  return (
    <View style={styles.container}>
    <AntDesign name="mail" size={24} color="#9ca3af" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Enter your emails"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
      />
      {/* <Icon name="email" size={24} color="#9ca3af" style={styles.icon} /> */}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 0,
    paddingVertical: 4,
    marginBottom:10,
    width:350
    
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    // width: '100%'
  },
  icon: {
    marginLeft: 8,
  },
});

export default EmailInput;
