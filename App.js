import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {

    return (
        <NavigationContainer>
            <SafeAreaView style={{ flexDirection: "column" }}>
                <View style={{ height: "94%", backgroundColor: "#DDDDDD", flexDirection: "column" }}>
                </View>
                <View style={{ height: "8%", backgroundColor: "#DDDDDD", flexDirection: "column" }}>
                </View>
            </SafeAreaView>
        </NavigationContainer>
    );
}
