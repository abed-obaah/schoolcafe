import React from 'react';
import { Image, StyleProp, ViewStyle } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo, MaterialIcons,SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { type ComponentProps } from 'react';

type IconName = ComponentProps<typeof Ionicons>['name'] | ComponentProps<typeof Entypo>['name'];

type TabBarIconProps = {
  name: IconName;
  iconType: 'Ionicons' | 'Entypo' |'FontAwesome6' | 'MaterialIcons' | 'SimpleLineIcons';
  index: number;
  style?: StyleProp<ViewStyle>;
};

export function TabBarIcon({ style, iconType, index, name, ...rest }: TabBarIconProps) {
  if (index === 0) {
    return (
      <Image
        source={require('@/assets/images/splash.png')}
        style={[{ width: 28, height: 28, marginBottom: -3 }, style]}
      />
    );
  }

  switch (iconType) {
    case 'Ionicons':
      return <Ionicons name={name as ComponentProps<typeof Ionicons>['name']} size={20} style={[{ marginBottom: -3 }, style]} {...rest} />;
    case 'Entypo':
      return <Entypo name={name as ComponentProps<typeof Entypo>['name']} size={20} style={[{ marginBottom: -3 }, style]} {...rest} />;
      case 'FontAwesome6':
      return <FontAwesome6 name={name as ComponentProps<typeof Entypo>['name']} size={20} style={[{ marginBottom: -3 }, style]} {...rest} />;
      case 'SimpleLineIcons':
        return <SimpleLineIcons name={name as ComponentProps<typeof Entypo>['name']} size={20} style={[{ marginBottom: -3 }, style]} {...rest} />;
    default:
      return null;
  }
}
