// In App.js in a new project

import * as React from 'react';
import {View} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from '@rneui/themed';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import BootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';

function HomeScreen() {
  const width = useSharedValue(100);
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View>
      <Button title="Solid" />
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="clear" />
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);
  return <Navigation />;
}
