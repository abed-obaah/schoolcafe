import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';
import COLORS from '@/constants/Colorsb';
const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
    <Text>modal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    height: 40,
    width: 'auto',
    alignSelf: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  link: {
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  form: {
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#1F2937',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB',
  },
  dividerText: {
    marginHorizontal: 8,
    color: '#1F2937',
  },
  socialContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  socialIcon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
  socialText: {
    color: '#1F2937',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default SignInScreen;
