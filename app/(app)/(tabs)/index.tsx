import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, FlatList, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import logo from '@/assets/icons/clearLogo.png'; // Path to your main logo
import smallIcon from '@/assets/icons/verify.png'; // Path to your small icon
import Search from '@/components/SearchForm';
import Headers from '@/components/listHeaders';
import Card from '@/components/featuredSchool';
import News from '@/components/NewsUpdate';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButtons  from "@/constants/Button"
import EmailInput from '@/components/NewsLetter/EmailInput';
import BottomSlideModal from '@/components/modal';
const HomePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSlide, setModalVisibleSlide] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setModalVisible(true);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  const data = [
    {
      id: '1',
      imageSrc: require('@/assets/images/delsu.png'), // Replace with your image path
      title: 'Delta state university',
      details: 'Delta State University is a public institution providing a comprehensive undergraduate and graduate curriculum to approximately 3,500 students representing all of the states and 50 different countries.',
      featured: true,
      views: 1234,
      rating: 4,
      location:'Abraka, Delta state, Nigeria. 330105'
    },
    {
      id: '2',
      imageSrc: require('@/assets/images/delsu.png'),
      title: 'Lagos state university',
      details: 'Delta State University is a public institution providing a comprehensive undergraduate and graduate curriculum to approximately 3,500 students representing all of the states and 50 different countries.',
      featured: true,
      views: 2345,
      rating: 5,
      location:'Abraka, Delta state, Nigeria. 330105'
    },
    {
      id: '3',
      imageSrc: require('@/assets/images/delsu.png'),
      title: 'Lagos state university',
      details: 'Delta State University is a public institution providing a comprehensive undergraduate and graduate curriculum to approximately 3,500 students representing all of the states and 50 different countries.',
      featured: true,
      views: 2345,
      rating: 5,
      location:'Abraka, Delta state, Nigeria. 330105'
    },
    // Add more card data objects as needed
  ];

  const renderItem = ({ item }) => (
    <Card
      imageSrc={item.imageSrc}
      title={item.title}
      details={item.details}
      featured={item.featured}
      views={item.views}
      rating={item.rating}
      location={item.location}
    />
  );

  const ItemSeparator = () => <View style={{ width: 20 }} />;

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" // Status bar text color
        backgroundColor="black"  // Status bar background color
      />
      <View style={styles.homepage}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.logo} />
          <Image source={smallIcon} style={styles.smallIcon} />
        </View>
        <Search onPress={() => setModalVisibleSlide(true)} />
        <Headers />
      </View>
      <ScrollView style={styles.section}>
        <Text style={styles.sectionText}>Featured School</Text>
        <View style={styles.cardListContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={styles.contentContainer}
          />
        </View>

        <Text style={styles.sectionTexts}>News and Updates</Text>
        <News />
      </ScrollView>

      {modalVisible && (
        <BlurView intensity={100}  tint='dark' style={styles.absolute}>
          <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
               
                <View style={styles.textContainer}>
                  <Text style={styles.title}>Subscribe Newsletter</Text>
                  <Text style={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Text>
                 
                </View>
                <EmailInput/>
                <View style={styles.buttonContainer}>
                <GradientButtons
            label="  Subscribe to our newsletter               "
          onPress={() => {}}
          showIcon={false}
          style={{ width: '100%' }}
        />


                  <TouchableOpacity onPress={()=>setModalVisible(false)}>
                      <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                
                </View>
              </View>
            </View>
          </Modal>
        </BlurView>
      )}
  <BottomSlideModal visible={modalVisibleSlide} onClose={() => setModalVisibleSlide(false)} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  homepage: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', 
    // paddingVertical: -90,
  },
  imageContainer: {
    flexDirection: 'row',    // Align items side by side
    alignItems: 'center',    // Center items vertically
    width: '100%',           // Full width
    position: 'relative',    // Needed for positioning small icon absolutely
    marginTop: 100,          // Adjust this value to bring the images down
  },
  logo: {
    width: 80,  // Size of the main logo
    height: 80,
    position: 'absolute',
    left: '50%',    // Center the logo horizontally
    transform: [{ translateX: -40 }], // Adjust by half the logo width to center it
  },
  smallIcon: {
    position: 'absolute',
    right: 16,    // Align small icon to the right edge
    bottom: -10,  // Align small icon to the bottom of the imageContainer
    width: 40,    // Size of the small icon
    height: 40,
  },
  section: {
    flex: 1,
  },
  sectionText: {
    color: '#2C2C2C',
    fontSize: 16,
    padding: 30,
    fontWeight: '500'
  },
  sectionTexts: {
    color: '#2C2C2C',
    fontSize: 16,
    // padding: 30,
    fontWeight: '500',
    marginTop: -30,
    paddingLeft: 30
  },
  cardListContainer: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  contentContainer: {
    paddingLeft: 10,
    paddingBottom: 20,
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
    // paddingHorizontal:-10
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 46,
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
    tintColor: '#065f46', // Darker green tint color
  },
  textContainer: {
    marginTop: 16,
    marginBottom:20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
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
    flexDirection: 'col',
    marginTop: 16,
    alignContent:'center',
    alignItems:'center'
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
    backgroundColor: '#e5e7eb',
    
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cancelButtonText: {
    color: '#818D96',
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical:30,
    textDecorationLine:'underline'
  },
});

export default HomePage;
