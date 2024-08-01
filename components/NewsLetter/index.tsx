import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { CheckIcon } from '@heroicons/react/24/outline';
import EmailInput from './EmailInput';


export default function Example() {
  const [open, setOpen] = useState(true);

  return (
    <View style={styles.container}>
      {open && (
        <BlurView intensity={50} style={styles.absolute}>
          <Modal
            transparent={true}
            animationType="fade"
            visible={open}
            onRequestClose={() => setOpen(false)}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.iconContainer}>
                  <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Green_check.svg/2048px-Green_check.svg.png' }}
                    style={styles.icon}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>Payment successful</Text>
                  <Text style={styles.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur
                    iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
                  </Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.deactivateButton]}
                    onPress={() => setOpen(false)}
                  >
                    <Text style={styles.buttonText}>Deactivate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.cancelButton]}
                    onPress={() => setOpen(false)}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </BlurView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: '#d1fae5',
    borderRadius: 50,
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#10b981',
  },
  textContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  deactivateButton: {
    backgroundColor: '#4f46e5',
  },
  cancelButton: {
    backgroundColor: '#f3f4f6',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: '#111827',
    fontWeight: 'bold',
  },
});
