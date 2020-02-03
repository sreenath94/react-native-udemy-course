import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CounterScreen = () => {
    //This will allow the two variable to be set from the array returned from useState
    const [counter, setCounter] = useState(0);
    return <View>
        <Button title="Increment" onPress={() => {
            setCounter(counter + 1);
        }} />
        <Button title="Decrement" onPress={() => {
            setCounter(counter - 1);
        }} />
        <Text>Current Count : {counter}</Text>
    </View>
};

const styleSheet = StyleSheet.create({

})

export default CounterScreen;