import { FontAwesome, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    head: 'Delta state University, Nigeria',
    nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: {
      waec: 'Waec',
      jamb: 'Jamb',
    },
    ratings:'Overall ratings',
    reviews:'1.2k Reviews',
    rating: 4,
    location:'Abraka, Delta state, Nigeria. 330105',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    head: 'Delta state University, Nigeria',
    nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: {
      waec: 'Waec',
      jamb: 'Jamb',
    },
    ratings:'Overall ratings',
    reviews:'1.2k Reviews',
    rating: 4,
    location:'Abraka, Delta state, Nigeria. 330105',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    head: 'Delta state University, Nigeria',
    nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: {
      waec: 'Waec',
      jamb: 'Jamb',
    },
    ratings:'Overall ratings',
    reviews:'1.2k Reviews',
    rating: 4,
    location:'Abraka, Delta state, Nigeria. 330105',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    head: 'Delta state University, Nigeria',
    nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: {
      waec: 'Waec',
      jamb: 'Jamb',
    },
    ratings:'Overall ratings',
    reviews:'1.2k Reviews',
    rating: 4,
    location:'Abraka, Delta state, Nigeria. 330105',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    head: 'Delta state University, Nigeria',
    nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: {
      waec: 'Waec',
      jamb: 'Jamb',
    },
    ratings:'Overall ratings',
    reviews:'1.2k Reviews',
    rating: 4,
    location:'Abraka, Delta state, Nigeria. 330105',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    head: 'Delta state University, Nigeria',
    nameImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: {
      waec: 'Waec',
      jamb: 'Jamb',
    },
    ratings:'Overall ratings',
    reviews:'1.2k Reviews',
    rating: 4,
    location:'Abraka, Delta state, Nigeria. 330105',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // ... more data
];

const Example = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card} key={item.email}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.names}>{item.head}</Text>
          <View style={{ flexDirection: 'row', paddingLeft: 10, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Text style={styles.name}>{item.ratings}</Text>
            <View style={styles.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <FontAwesome
                  key={i}
                  name={i < item.rating ? "star" : "star-o"}
                  size={14}
                  color="#FFD700"
                />
              ))}
            </View>
            <Text style={styles.name}>{item.reviews}</Text>
          </View>
          <View style={{marginTop:24, flexDirection: 'row',marginLeft:-3}}>
            <Ionicons name="location-outline" size={12} color="black" />
            <View style={{marginLeft: 10}}>
              <Text style={styles.nameLocate}>{item.location}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>View profile</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={people}
      renderItem={renderItem}
      keyExtractor={item => item.email}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 19,
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
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    minWidth: 0,
    position: 'relative',
  },
  touchable: {
    flex: 1,
    marginTop: 20,
    marginLeft:-8
  },
  name: {
    fontSize: 9,
    fontWeight: '600',
    color: '#818D96',
    marginLeft: -10,
  },
  nameLocate: {
    fontSize: 9,
    fontWeight: '600',
    color: '#818D96',
    marginLeft: -12,
  },
  names: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    marginTop: -20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
    alignSelf: 'flex-start',
    paddingRight: 19,
  },
  badgeContainer: {
    position: 'absolute',
    top: 35,
    right: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1EBCEC4D',
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1972BF',
  },
});

export default Example;
