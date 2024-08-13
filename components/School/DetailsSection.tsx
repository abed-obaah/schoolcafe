import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { MaterialIcons, FontAwesome, FontAwesome6, AntDesign } from '@expo/vector-icons';

const DetailsSection = ({ icons, mainText, subText, isBlue, onLastItemClick, isLastItem }) => {
  const renderIcon = (icon) => {
    switch (icon.type) {
      case 'MaterialIcons':
        return <MaterialIcons name={icon.name} size={20} color="black" />;
      case 'FontAwesome':
        return <FontAwesome name={icon.name} size={20} color="black" />;
      case 'FontAwesome6':
        return <FontAwesome6 name={icon.name} size={20} color="black" />;
      case 'AntDesign':
        return <AntDesign name={icon.name} size={20} color="black" />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={isLastItem ? onLastItemClick : null} style={styles.container}>
      <View style={styles.iconContainer}>
        {icons.length > 0 && renderIcon(icons[0])}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.mainText, isBlue && styles.blueText]}>{mainText}</Text>
        {subText && <Text style={styles.subText}>{subText}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 6,
  },
  mainText: {
    fontSize: 12,
    fontWeight: '500',
  },
  blueText: {
    color: '#1972BF',
  },
  subText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default DetailsSection;
