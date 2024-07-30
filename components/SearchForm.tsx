import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

import { Ionicons, MaterialCommunityIcons, FontAwesome, AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

const SearchForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <MaterialIcons 
                    name="search" 
                    size={20} 
                    color="#9e9e9e" 
                    style={styles.icon}
                />
                <TextInput
                    placeholder="Search..."
                    style={styles.input}
                    placeholderTextColor="#9e9e9e"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
    },
    icon: {
        position: 'absolute',
        left: 0,
        height: '100%',
        width: 20,
    },
    input: {
        flex: 1,
        paddingLeft: 30, // Add padding to make space for the icon
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        color: '#000',
        fontSize: 14,
    },
});

export default SearchForm;
