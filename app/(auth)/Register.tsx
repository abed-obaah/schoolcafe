import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';
import COLORS from '@/constants/Colorsb';
import SwitchSelector from "react-native-switch-selector";
import { LinearGradient } from 'expo-linear-gradient';
import GradientButtons  from "@/constants/Button"
import { useAuth } from '@/context/auth';


const GradientButton = ({ children }) => (
  <LinearGradient
    colors={COLORS.Gradient_1}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.gradientButton}
  >
    {children}
  </LinearGradient>
);

const RegisterScreen = () => {
  const {signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [selectedOption, setSelectedOption] = useState("d");

  const handlePress = () => {
    // Handle button press
    console.log('Button Pressed!');
  };

  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 70,
  },
 
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 23,
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
    borderColor: '#D9F6FF',
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor:"#D9F6FF"
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


  switchContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: COLORS.Shade_white,
    padding: 5,
    width: '106%', // Adjust the width as needed
    height: 60, // Set the height of the container
    marginBottom:50,
    borderWidth: 1, // Add border width
    borderColor: "#1EBCEC", 
  },
  
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  selectedOption: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: COLORS.NavyBlue_100,
  },
  selectedText: {
    color: COLORS.Shade_white,
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default RegisterScreen;
