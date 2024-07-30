import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { XCircleIcon } from '@heroicons/react/20/solid'; // Assuming you have a way to use heroicons in React Native

const ErrorNotification = () => {
  return (
    <View style={styles.errorContainer}>
      <View style={styles.errorFlex}>
        <View style={styles.errorIcon}>
          {/* Replace this with an actual icon component */}
          {/* <XCircleIcon style={styles.iconStyle} /> */}
        </View>
        <View style={styles.errorContent}>
          <Text style={styles.errorTitle}>There were 2 errors with your submission</Text>
          <View style={styles.errorMessage}>
            <Text style={styles.errorListItem}>Your password must be at least 8 characters</Text>
            <Text style={styles.errorListItem}>Your password must include at least one pro wrestling finishing move</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: '#fef2f2',
    borderRadius: 6,
    padding: 6,
    marginTop:10
  },
  errorFlex: {
    flexDirection: 'row',
  },
  errorIcon: {
    flexShrink: 0,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: '#f87171',
  },
  errorContent: {
    marginLeft: 12,
  },
  errorTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#b91c1c',
  },
  errorMessage: {
    marginTop: 8,
  },
  errorListItem: {
    fontSize: 14,
    color: '#b91c1c',
    marginTop: 4,
  },
});

export default ErrorNotification;
