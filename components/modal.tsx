import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Animated, StyleSheet, Dimensions } from 'react-native';
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
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    // height: 400

   
  },
  modalContent: {
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
});

export default BottomSlideModal;
