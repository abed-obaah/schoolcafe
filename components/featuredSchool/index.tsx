import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for star icons

const Card = ({ imageSrc, title, details, featured, views, rating,location }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <ImageBackground source={imageSrc} style={styles.image} imageStyle={styles.imageStyle}>
          <View style={styles.overlay}>
            <View style={styles.overlayTop}>
              {featured && <Text style={styles.featuredText}>Featured</Text>}
              <Text style={styles.viewsText}>{views} views</Text>
            </View>
            <View style={styles.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <FontAwesome
                  key={i}
                  name={i < rating ? "star" : "star-o"}
                  size={14}
                  color="#FFD700"
                />
              ))}
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>{details}</Text>
        <Text style={styles.details}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center', // Center the content of the card
    width: 280, // Set a fixed width for the card
  },
  imageContainer: {
    padding: 10, // Add padding around the image
  },
  image: {
    width: 250, // Reduce the width of the image
    height: 150,
  },
  imageStyle: {
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  overlayTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredText: {
    backgroundColor: '#00DB58',
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 50,
  },
  viewsText: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#555',
    flexWrap: 'wrap', // Allow text to wrap within the container
    flexShrink: 1, // Ensure the text shrinks to fit the container
  },
});

export default Card;
