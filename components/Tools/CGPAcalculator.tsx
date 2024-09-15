import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button, StyleSheet, FlatList, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const products = [
  {
    id: 1,
    title: 'Basic Tee',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];

const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
];

const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
];

export default function CheckoutScreen() {
  const [selectedCountry, setSelectedCountry] = useState('US'); // Move state declaration inside the component
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0].id);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethods[0].id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Select your field of study:</Text>
        {/* <TextInput placeholder="Email address" style={styles.input} /> */}
        <Picker
          selectedValue={selectedCountry} // Bind selected value to state
          style={styles.input}
          onValueChange={(itemValue) => setSelectedCountry(itemValue)} // Update state on selection
        >
          <Picker.Item label="United States" value="US" />
          <Picker.Item label="business" value="CA" />
          <Picker.Item label="Mexico" value="MX" />
        </Picker>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Shipping Information</Text>
        <TextInput placeholder="First name" style={styles.input} />
        <TextInput placeholder="Last name" style={styles.input} />
        <TextInput placeholder="Company" style={styles.input} />
        <TextInput placeholder="Address" style={styles.input} />
        <TextInput placeholder="Apartment, suite, etc." style={styles.input} />
        <TextInput placeholder="City" style={styles.input} />
     
        <TextInput placeholder="State / Province" style={styles.input} />
        <TextInput placeholder="Postal code" style={styles.input} />
        <TextInput placeholder="Phone" style={styles.input} />
      </View>

      {/* <Button title="Submit" onPress={() => {}} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
});
