import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Badge = ({ backgroundColor, textColor, borderColor, textLines, imageSrc }) => (
  <View style={[styles.badge, { backgroundColor, borderColor }]}>
    <View style={styles.imageContainer}>
      {imageSrc && <Image source={imageSrc} style={styles.image} />}
    </View>
    <View style={styles.textContainer}>
      {textLines.map((line, index) => (
        <Text key={index} style={[styles.text, { color: textColor }]}>
          {line}
        </Text>
      ))}
    </View>
  </View>
);

export default function Example() {
  return (
    <ScrollView horizontal={true} style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <Badge
        backgroundColor="rgba(217, 217, 217, 0.37)" // bg-gray-50
        textColor="#ffffff" // text-gray-600
        borderColor="rgba(217, 217, 217, 0.37)" // ring-gray-500/10
        textLines={["Relocation", "letter tool"]}
        imageSrc={require('@/assets/icons/location.png')}
      />
      <Badge
        backgroundColor="rgba(217, 217, 217, 0.37)" // bg-gray-50
        textColor="#ffffff" // text-gray-600
        borderColor="rgba(220, 38, 38, 0.1)" // ring-red-600/10
        textLines={["Topic", "Recommender"]}
        imageSrc={require('@/assets/icons/location.png')}
      />
      <Badge
        backgroundColor="rgba(217, 217, 217, 0.37)" // bg-gray-50
        textColor="#ffffff" // text-gray-600
        borderColor="rgba(217, 119, 6, 0.2)" // ring-yellow-600/20
        textLines={["CGPA", "Calculator"]}
        imageSrc={require('@/assets/icons/location.png')}
      />
      <Badge
        backgroundColor="rgba(217, 217, 217, 0.37)" // bg-gray-50
        textColor="#ffffff" // text-gray-600
        borderColor="rgba(5, 150, 105, 0.2)" // ring-green-600/20
        textLines={["Badge"]}
        imageSrc={require('@/assets/icons/location.png')}
      />
      <Badge
        backgroundColor="rgba(217, 217, 217, 0.37)" // bg-gray-50
        textColor="#ffffff" // text-gray-600
        borderColor="rgba(29, 78, 216, 0.1)" // ring-blue-700/10
        textLines={["Badge"]}
        imageSrc={require('@/assets/icons/location.png')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,  // Increased border radius for larger badges
    paddingHorizontal: 20,  // Increased padding
    paddingVertical: 12,     // Increased padding
    borderWidth: 1,
    marginHorizontal: 10,  // Increased spacing between badges
    backgroundColor: '#f9fafb',
  },
  imageContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 10,
    marginRight: 8,
  },
  textContainer: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,  // Increased font size
    fontWeight: '500',
    // textAlign: 'center',
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 12,  // Optional: round the image if needed
  },
});
