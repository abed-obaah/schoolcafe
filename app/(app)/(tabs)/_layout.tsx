import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon index={0} name="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="school"
        options={{
          title: 'School',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            // book-bookmark
            <TabBarIcon index={1} iconType="Entypo" name="graduation-cap" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon index={2} name="person-outline" color={color} />
            <TabBarIcon index={2} iconType="FontAwesome6" name="book-bookmark" color={color} />
            // <FontAwesome6 name="book-bookmark" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon index={3} iconType="Ionicons" name="book-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'more',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon index={4} iconType="SimpleLineIcons" name="grid" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
