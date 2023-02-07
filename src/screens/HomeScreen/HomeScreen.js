import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function HomeScreen({navigation}) {

    const onSettingsLinkPress = () => {
        navigation.navigate('Settings')
    }

    const onRecordDataLinkPress = () => {
        navigation.navigate('Record Data')
    }

    const onConnectDeviceLinkPress = () => {
        navigation.navigate('Connect Your Device')
    }

    const onViewExportDataPress = () => {
        navigation.navigate('Stored Data')
    }


    return (
        <View style={styles.container}>
         <TouchableOpacity style={styles.button} onPress={() => onRecordDataLinkPress()}>
                    <Text style={styles.buttonTitle}>Record Data</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={() => onConnectDeviceLinkPress()}>
                    <Text style={styles.buttonTitle}>Connect your Device</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttonSettings} onPress={() => onSettingsLinkPress()}>
                    <Text style={styles.buttonTitle}>Settings</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={() => onViewExportDataPress()}>
                    <Text style={styles.buttonTitle}>View/Export Data</Text>
         </TouchableOpacity>
        </View>
    )
}