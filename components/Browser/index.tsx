import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import DidYouKnow from './DidYouKnow';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import Footer from './Footer'



const GoogleCustomSearch = () => {
  return (
    <SafeAreaView style={styles.container}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft:10}} />
  <Text style={[styles.header, { flex: 1, textAlign: 'center' }]}>Browser</Text>
</View>


      
        <WebView
        source={{ uri: 'https://timely-torte-a2967a.netlify.app/' }}
        style={styles.webview}
        startInLoadingState
        renderLoading={()=> (
          <View style={{flex:1,marginTop:-20}}>
            {/* <Text>Loading....</Text> */}
            <DidYouKnow/>
          </View>
        )}
      />
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
