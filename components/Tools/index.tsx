import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
// import DidYouKnow from './DidYouKnow';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import Footer from '@/components/Footer/index'



const GoogleCustomSearch = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft:10}} />
        <Text style={[styles.header, { flex: 1, textAlign: 'center' }]}>{data}</Text>
        </View>

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
});

export default GoogleCustomSearch;
