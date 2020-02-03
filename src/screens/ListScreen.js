import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Dale',age:20 },
        { name: 'Dale1',age:20  },
        { name: 'Dale2',age:20  },
        { name: 'Dale3',age:20  },
        { name: 'Dale4',age:20  },
        { name: 'Dale5',age:20  },
        { name: 'Dale6',age:20  },
        { name: 'Dale7',age:20  },
        { name: 'Dale8',age:20  },
        { name: 'Dale9',age:20  },
        { name: 'Dale10' ,age:20 },
        { name: 'Dale11' ,age:20 },
        { name: 'Dale12' ,age:20 },];
    return (<FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        //showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => { friend.name }}
        data={friends}
        renderItem={({ item }) => {
            //element === {item:{name:'dale'},index:0}
        return <Text style={styles.textStyle}>{item.name}- Age {item.age}</Text>
        }}
    />);
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;