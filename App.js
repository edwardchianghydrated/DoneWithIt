import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'

import MyMap from './mymap_component.js'
import MainNavigationBar from './navigation_bar.js'

export default function App() {

    return (
        <NavigationContainer>
            <SafeAreaView style={{ flexDirection: "column" }}>
                <View style={{ height: "94%", backgroundColor: "#DDDDDD", flexDirection: "column" }}>
                    <MyMap />
                </View>
                <View style={{ height: "8%", backgroundColor: "#DDDDDD", flexDirection: "column" }}>
                    <MainNavigationBar />
                </View>
            </SafeAreaView>
        </NavigationContainer>
    );
}
