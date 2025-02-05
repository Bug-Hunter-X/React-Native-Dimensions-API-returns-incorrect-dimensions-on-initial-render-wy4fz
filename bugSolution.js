import React, { useEffect, useState } from 'react';
import { Dimensions, LayoutAnimation, StyleSheet, View, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const MyComponent = () => {
  const [dimensions, setDimensions] = useState({
    width: width,
    height: height
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setDimensions({ width: window.width, height: window.height });
    });

    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;