import React from 'react';
import {View, Text} from 'react-native';
import { useDimensions } from '@react-native-community/hooks'

const Hooks=()=>{
    const { width, height } = useDimensions().window
    console.log(width, height);
    return(
        <View>
            <Text>Count up Page {width}*{height}</Text>
        </View>
    );
}

export default Hooks;
