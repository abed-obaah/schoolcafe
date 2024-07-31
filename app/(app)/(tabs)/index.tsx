import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, FlatList, ScrollView } from 'react-native';
import logo from '@/assets/icons/clearLogo.png'; // Path to your main logo
import smallIcon from '@/assets/icons/verify.png'; // Path to your small icon
import Search from '@/components/SearchForm';
import Headers from '@/components/listHeaders'
import Card from '@/components/featuredSchool';
import News from '@/components/NewsUpdate'

const HomePage = () => {
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
        <Search/>
        <Headers/>
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
        <News/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'
  },
  homepage: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
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
    color:'#2C2C2C',
    fontSize:16,
    padding:30,
    fontWeight:'500'
  },
  sectionTexts: {
    color:'#2C2C2C',
    fontSize:16,
    // padding:30,
    fontWeight:'500',
    marginTop:-30,
    paddingLeft:30
  },
  cardListContainer: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  contentContainer: {
    paddingLeft: 20,
    paddingBottom: 20,
  }
});

export default HomePage;
