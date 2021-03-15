import React from 'react';
import {View, Text} from 'react-native';
import QRCode from "react-qr-code";

const Generator=()=>{
    return(
        <View>
            <Text>QR Generator Page</Text>
            <QRCode value="This is a example using QR" />
        </View>
    );
}

export default Generator;
