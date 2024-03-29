import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'

import MyMap, { _map } from './src/mymap_component.js'
import MainNavigationBar from './src/navigation_bar.js'

export default function App() {
    const _map = React.useRef(null);

    return (
        <NavigationContainer>
            <SafeAreaView style={{ flexDirection: "column" }}>
                <View style={{ height: "94%", backgroundColor: "#DDDDDD", flexDirection: "column" }}>
                    <MyMap map_ref={_map} />
                </View>
                <View style={{ height: "8%", backgroundColor: "#DDDDDD", flexDirection: "column" }}>
                    <MainNavigationBar />
                </View>
            </SafeAreaView>
        </NavigationContainer>
    );
}
