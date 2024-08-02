import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      head: '2024/2025 WAEC Syllabus for All Subjects | Read & Download PDF',
      nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      subjects: {
        waec: 'Waec',
       
        jamb: 'Jamb',
        
      },
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'L. Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        head: '2024/2025 WAEC Syllabus for All Subjects | Read & Download PDF',
        nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        subjects: {
          waec: 'Waec',
          english: 'English Language',
          jamb: 'Jamb',
          // chemistry: 'Chemistry',
          // physics: 'Physics',
          // Add more subjects as needed
        },
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'L. Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        head: '2024/2025 WAEC Syllabus for All Subjects | Read & Download PDF',
        nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        subjects: {
          math: 'Mathematics',
          english: 'English Language',
        //   biology: 'Biology',
          // chemistry: 'Chemistry',
          // physics: 'Physics',
          // Add more subjects as needed
        },
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
  ];

const Example = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card} key={item.email}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
      <View style={styles.subjectsContainer}>
            {Object.entries(item.subjects).map(([key, value]) => (
              <Text key={key} style={styles.subject}>{value}</Text>
            ))}
          </View>
        <TouchableOpacity style={styles.touchable}>
        <Text style={styles.names}>{item.head}</Text>

        <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={{ uri: item.imageUrl }} style={styles.images} />
                    <Text style={styles.name}>{item.name}</Text>
        </View>
         
          {/* <Text style={styles.role}>{item.role}</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={people}
      renderItem={renderItem}
      keyExtractor={item => item.email}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    padding: 10,
    marginBottom: 16,
    
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginRight: 12,
  },
  images: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    minWidth: 0,
  },
  touchable: {
    flex: 1,
    marginTop:20
  },
  name: {
    fontSize: 10,
    fontWeight: '600',
    color: '#818D96',
    marginLeft:-10
  },
  names: {
    fontSize: 10,
    fontWeight: '500',
    color: '#333',
    marginTop:-20
  },
  role: {
    fontSize: 14,
    color: '#777',
  },
  subjectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  subject: {
    backgroundColor: '#d1fae5', // bg-green-100
    color: '#065f46', // text-green-700
    paddingHorizontal: 8, // px-2
    paddingVertical: 4, // py-1
    fontSize: 12, // text-xs
    fontWeight: '500', // font-medium
    borderRadius: 12, // rounded-full
    marginRight: 4,
    marginBottom: 4,
  },
});

export default Example;
