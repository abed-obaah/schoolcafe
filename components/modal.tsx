import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Animated, StyleSheet, Dimensions } from 'react-native';
import WebView from 'react-native-webview'
 import WebBrowser from '@/components/Browser';
const { height } = Dimensions.get('window');

const BottomSlideModal = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View />
      </TouchableOpacity>
      <Animated.View style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}>
        <View style={styles.modalContent}>
          {/* <WebView
            source={{ uri: 'https://qbucks.com.ng/mobile/login/' }}
            style={{ flex: 1 }}
            mixedContentMode="compatibility"
          /> */}
          <WebBrowser />
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '80%', // Set height to ensure WebView has enough space
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden', // Add overflow hidden to prevent WebView from spilling over
  },
  modalContent: {
    flex: 1,
  },
});

export default BottomSlideModal;
