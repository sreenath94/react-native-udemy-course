import React,{useState} from 'react';
import { StyleSheet, View, Button ,ToastAndroid,FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors,setColors] = useState([]);
    return <View>
        <Button title="Change Color" onPress={()=>{
            setColors([...colors,randomRGB()])
        }}/>
        
        <FlatList
        keyExtractor={item=>item}
        data={colors}
        renderItem={({item})=>{
            return <View style={{ height: 100, width: 100, backgroundColor:item }}></View>
        }}/>
    </View>
}  

const randomRGB = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    ToastAndroid.show(`${red}`, ToastAndroid.SHORT);
    return `rgb(${red}, ${green}, ${blue})`;
};

const randomRgb = () => {
    const red = _.random(0, 255)
    const green = _.random(0, 255)
    const blue = _.random(0, 255)
    return `rgb(${red}, ${green}, ${blue})`
  }

const styles = StyleSheet.create({});


export default ColorScreen;
