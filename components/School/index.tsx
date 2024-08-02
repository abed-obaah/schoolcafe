// Badge.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const Badge = ({ text, bgColor, textColor, ringColor, icon, iconLibrary }) => {
  const renderIcon = () => {
    if (iconLibrary === 'Ionicons') {
      return <Ionicons name={icon} size={16} color={textColor} style={styles.icon} />;
    } else if (iconLibrary === 'SimpleLineIcons') {
      return <SimpleLineIcons name={icon} size={16} color={textColor} style={styles.icon} />;
    }
    return null;
  };

  return (
    <View style={[styles.badge, { backgroundColor: bgColor, borderColor: ringColor }]}>
      {icon && renderIcon()}
      <Text style={[styles.badgeText, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 10,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  icon: {
    marginRight: 4,
  },
});

export default Badge;
