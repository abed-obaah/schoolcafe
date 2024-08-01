import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const GoogleCustomSearch = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Google Custom Search</Text>
        <WebView
        source={{ uri: 'https://google.com/' }}
        style={styles.webview}
      />
      <Text style={styles.header}>Google Custom Search</Text>
     
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
