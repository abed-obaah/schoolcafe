import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';
import COLORS from '@/constants/Colorsb';
import SwitchSelector from "react-native-switch-selector";
import { LinearGradient } from 'expo-linear-gradient';
import GradientButtons  from "@/constants/Button"
import { useAuth } from '@/context/auth';
import ErrorNotification from './ErrorNotification'
import  Register from '@/app/(auth)/Register';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { useToast } from "react-native-toast-notifications";


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



const CustomSwitch = ({ options, selectedOption, onPress }) => {
  return (
    <View style={styles.switchContainer}>
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          onPress={() => onPress(option.value)}
          style={[
            styles.option,
            selectedOption === option.value && styles.selectedOption
          ]}
        >
          {selectedOption === option.value ? (
            <LinearGradient
              colors={["#1EBCEC", "#1972BF"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.gradient}
            >
              <Text style={styles.selectedText}>{option.label}</Text>
            </LinearGradient>
          ) : (
            <Text style={styles.text}>{option.label}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};


const SignInScreen = () => {
  const { signIn,registerUser } = useAuth();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const db = getFirestore();

  const [selectedOption, setSelectedOption] = useState("d");

  // const signIn = async () => {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;
  //     console.log('Signed in with:', user.email);
  //     toast.show("Login Successfull", {
  //       type: "success",
  //       placement: "top",
  //       duration: 4000,
  //       offset: 30,
  //       animationType: "slide-in",
  //     });
  //     // Navigate to the main app screen
  //   } catch (error) {
  //     console.error('Error signing in:', error.message);
  //     // Handle sign-in error
  //     toast.show("Login Failed", {
  //       type: "danger",
  //       placement: "top",
  //       duration: 4000,
  //       offset: 30,
  //       animationType: "slide-in",
  //     });
  //   }
  // };

  // const registerUser = async () => {
   

  //   try {
  //     // Create user with email and password
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;

  //     // Store user data in Firestore
  //     await setDoc(doc(db, "users", user.uid), {
  //       email: user.email,
  //       createdAt: new Date(),
  //       // Add any other user details you want to store
  //     });

  //     console.log("User registered and data stored in Firestore!");
  //     toast.show("Registration Successfull", {
  //       type: "success",
  //       placement: "top",
  //       duration: 4000,
  //       offset: 30,
  //       animationType: "slide-in",
  //     });


  //   } catch (err) {
  //     console.error("Error creating user or storing data in Firestore:", err);
  //     toast.show("Registration Failed", {
  //       type: "danger",
  //       placement: "top",
  //       duration: 4000,
  //       offset: 30,
  //       animationType: "slide-in",
  //     });

  //     setError(err.message);
  //   }
  // };


  const handleLogin = () => {
    if (email && password) {
        signIn(email, password);
        toast.show("Login Successful", {
          type: "success",
          placement: "top",
          duration: 4000,
          offset: 30,
          animationType: "slide-in",
      });
    } else {
        // Handle the case where email or password is missing
        console.log('Please fill in both fields');
        toast.show("Login Failed", {
          type: "danger",
          placement: "top",
          duration: 4000,
          offset: 30,
          animationType: "slide-in",
      });
    }
};

const handleRegister = () => {
  if (email && password) {
      registerUser(email, password);
      toast.show("Registration Successful", {
        type: "success",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
    });
  } else {
      // Handle the case where email or password is missing
      console.log('Please fill in both fields');
      toast.show("Registration Failed", {
        type: "danger",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
    });
  }
};

  const handlePress = () => {
    // Handle button press
    console.log('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/logo.png')}/>
      <View style={styles.formContainer}>
       
      <CustomSwitch
        options={[
          { label: "Login", value: "d" },
          { label: "Register", value: "m" }
        ]}
        selectedOption={selectedOption}
        onPress={setSelectedOption}
      />
                    {selectedOption === 'd' &&      <><View style={{ marginBottom: 14 }}>
          {/* <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Email Address</Text> */}
          <View style={{
            width: "100%",
            height: 56,
            borderColor: COLORS.Gray_200,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 22,
            paddingVertical: 12,
            // backgroundColor: COLORS.input_gray,
            flexDirection: "row"
          }}>
            <Image source={require('../../assets/icons/oui_email.png')} style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Email address"
              placeholderTextColor={COLORS.Gray_400}
              style={{ width: "100%", fontSize: 16 }}
              value={email}
              onChangeText={setEmail} />
          </View>
        </View><View style={{ marginBottom: 12 }}>
            {/* <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Password</Text> */}
            <View style={{
              width: "100%",
              height: 56,
              borderColor: COLORS.Gray_200,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 22,
              paddingVertical: 12,
              // backgroundColor: COLORS.input_gray,
              flexDirection: "row"
            }}>
              <Image source={require('../../assets/icons/oui_key.png')} style={{ marginRight: 10 }} />
              <TextInput
                placeholder="password"
                placeholderTextColor={COLORS.Gray_300}
                style={{ width: "100%", fontSize: 16 }}
                secureTextEntry
                value={password}
                onChangeText={setPassword} />
            </View>

          </View>
          <View style={{ marginBottom: 12 }}>
            {/* <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Password</Text> */}
       
            <View style={{ paddingBottom: 20, paddingLeft: 5, paddingTop: 10,flexDirection:"row", justifyContent:'space-between'}}>
              <Text style={{ fontSize: 12, fontFamily: "inter" }}>Dont have an account? <Text style={{ fontWeight: "bold", color: '#1972BF', textDecorationStyle: 'solid', textDecorationLine: 'underline' }}>Create one</Text></Text>
              <Text style={{ fontSize: 12, fontFamily: "inter" }}>Forgot Password?</Text>
            </View>
            <GradientButtons label="Login" onPress={handleLogin} />

          </View>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View><View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Sign in with Google')}>
              <Image source={require('../../assets/icons/bi_google.png')} style={styles.socialIcon} />

            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Sign in with GitHub')}>
              <Image source={require('../../assets/icons/ic_baseline-facebook.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Sign in with GitHub')}>
              <Image source={require('../../assets/icons/ic_baseline-apple.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
          <View>
          {/* <ErrorNotification/> */}
          {/* {error ? <ErrorNotification message={error} /> : null} */}
          </View>
          </>}


                    {selectedOption === 'm' && <><View style={{ marginBottom: 14 }}>
          {/* <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Email Address</Text> */}
          <View style={{
            width: "100%",
            height: 56,
            borderColor: COLORS.Gray_200,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 22,
            paddingVertical: 12,
            // backgroundColor: COLORS.input_gray,
            flexDirection: "row"
          }}>
            <Image source={require('../../assets/icons/oui_email.png')} style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Email address"
              placeholderTextColor={COLORS.Gray_400}
              style={{ width: "100%", fontSize: 16 }}
              value={email}
              onChangeText={setEmail} />
          </View>
        </View><View style={{ marginBottom: 12 }}>
            {/* <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Password</Text> */}
            <View style={{
              width: "100%",
              height: 56,
              borderColor: COLORS.Gray_200,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 22,
              paddingVertical: 12,
              // backgroundColor: COLORS.input_gray,
              flexDirection: "row"
            }}>
              <Image source={require('../../assets/icons/oui_key.png')} style={{ marginRight: 10 }} />
              <TextInput
                placeholder="password"
                placeholderTextColor={COLORS.Gray_300}
                style={{ width: "100%", fontSize: 16 }}
                secureTextEntry
                value={password}
                onChangeText={setPassword} />
            </View>

          </View>
          <View style={{ marginBottom: 12 }}>
            {/* <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Password</Text> */}
          

            <View style={{ paddingBottom: 20, paddingLeft: 5, paddingTop: 10 }}>
              <Text style={{ fontSize: 12, fontFamily: "inter" }}>Already have an account? <Text style={{ fontWeight: "bold", color: '#1972BF', textDecorationStyle: 'solid', textDecorationLine: 'underline' }}>Login</Text></Text>
            </View>
            <GradientButtons label="Create Account" 
            onPress={handleRegister}  
            />

          </View><View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View><View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Sign in with Google')}>
              <Image source={require('../../assets/icons/bi_google.png')} style={styles.socialIcon} />

            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Sign in with GitHub')}>
              <Image source={require('../../assets/icons/ic_baseline-facebook.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Sign in with GitHub')}>
              <Image source={require('../../assets/icons/ic_baseline-apple.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View></>}
        
   
      </View>
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

export default SignInScreen;
