import React from 'react';
import {View, Text} from 'react-native';
import { CountUp } from 'use-count-up'

const Countup=()=>{
    return(
        <View>
            <Text>Count up Page</Text>
            <CountUp isCounting end={1320} duration={10} />
        </View>
    );
}

export default Countup;
