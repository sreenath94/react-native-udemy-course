import React  from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


///Instead of (props)
const HomeScreen = ({navigation}) => {
  //console.log(props.navigation);
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      onPress={() => { navigation.navigate('Components') }}
      title='Go to components demo' />
    <Button
      onPress={() => { navigation.navigate('List') }}
      title='Go to list demo' />
      <Button
      onPress={() => { navigation.navigate('ImageScreen') }}
      title='Go to ImageScreen demo' />
      <Button
      onPress={() => { navigation.navigate('CounterScreen') }}
      title='Go to CounterScreen demo' />
       <Button
      onPress={() => { navigation.navigate('ColorScreen') }}
      title='Go to Color Screen demo' />
      <Button
      onPress={() => { navigation.navigate('SquareScreen') }}
      title='Go to Square Screen demo' />
      <Button
      onPress={() => { navigation.navigate('TextScreen') }}
      title='Go to Text Screen demo' />
    <TouchableOpacity onPress={() => { navigation.navigate('List') }}>
      <Text>Go to list</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
