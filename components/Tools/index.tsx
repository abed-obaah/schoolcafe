import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
// import DidYouKnow from './DidYouKnow';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import Footer from '@/components/Footer/index'
import CgpaCalculator from '@/components/Tools/CGPAcalculator'



const GoogleCustomSearch = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft:10}} />
        <Text style={[styles.header, { flex: 1, textAlign: 'center' }]}>{data}</Text>
        </View>
        <View style={styles.containers}>
      <Text style={styles.text}>{data}</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque consequatur harum quasi doloremque magnam aliquam quibusdam ab voluptatibus soluta.
      </Text>
    </View>
        <CgpaCalculator/>
     <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  webview: {
    flex: 1,
  },
  containers: {
    backgroundColor: '#d0f0c0', // Light green color
    padding: 20, // Add padding inside
    // borderRadius: 8, // Optional: add rounded corners
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10, // Optional: spacing between text elements
  },
});

export default GoogleCustomSearch;
