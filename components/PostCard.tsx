import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const PostCard = ({ post,onMorePress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URI
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.universityName}>{post.universityName}</Text>
          <Text style={styles.postedTime}>{post.postedTime}</Text>
        </View>
        <TouchableOpacity style={styles.moreIcon} onPress={onMorePress}>
          <MaterialIcons name="more-horiz" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>{post.content}</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <View style={styles.reactions}>
            <FlatList
              data={post.reactions}
              renderItem={({ item }) => <Image source={{ uri: item.uri }} style={styles.reactionImage} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
            <Text style={styles.reactionText}>{post.reactionText}</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action}>
            <FontAwesome name="heart-o" size={14} color="#FF002E" />
            <Text style={styles.actionText}>React</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <FontAwesome name="comment-o" size={14} color="gray" />
            <Text style={styles.actionText}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>7</Text>
            <Text style={styles.actionText}>Comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    flex: 1,
    marginLeft: 8,
  },
  universityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postedTime: {
    color: 'gray',
    fontSize: 10,
  },
  moreIcon: {
    padding: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  seeMore: {
    color: '#007bff',
    marginBottom: 8,
  },
  footer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    paddingTop: 8,
  },
  reactions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reactionImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  reactionText: {
    marginRight: 90,
    color: 'gray',
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 4,
    color: 'gray',
    fontSize: 14,
  },
});

export default PostCard;
