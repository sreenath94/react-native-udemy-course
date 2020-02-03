import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({title,imageSource}) => {
    //  console.log(props)
    return <View>
        <Text>{title}</Text>
        <Image source={imageSource}></Image>
    </View>
}

const style = StyleSheet.create({

});

export default ImageDetail;

