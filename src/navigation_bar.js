import { useState } from 'react';
import * as React from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { supabase } from '../libs/supabase.js'

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></View>
    );
}

const Tab = createBottomTabNavigator();

export default function MainNavigationBar() {
    const [loading, setLoading] = useState(true)
    const [navigationName, setNavigationName] = useState('')

    async function getNavigationName() {
        try {
            setLoading(true)

            const { data, error, status } = await supabase
                .from('test_table')
                .select()
                .order('name', { ascending: true })
                .limit(1)
                .single()

            console.log('data:', data)
            console.log('error:', error)
            console.log('status:', status)

            if (error) {
                throw error
            }

            if (data) {
                setNavigationName(data.name)
            }
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelPosition: 'below-icon',
                    tabBarIcon: () => (
                        <Image source={require('../assets/home.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="Advertisement"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Advertisement',
                    tabBarLabelPosition: 'below-icon',
                    tabBarIcon: () => (
                        <Image source={require('../assets/presention-chart.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="Subscription"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Subscription',
                    tabBarLabelPosition: 'below-icon',
                    tabBarIcon: () => (
                        <Image source={require('../assets/dollar-square.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SettingsScreen}
                options={{
                    // tabBarLabel: 'Profile',
                    tabBarLabel: () => (
                        <Text>{loading ? 'Loading ...' : navigationName}</Text>
                    ),
                    tabBarLabelPosition: 'below-icon',
                    tabBarIcon: () => (
                        <Image source={require('../assets/profile-circle.png')} />
                    ),
                    tabBarButton: props => (
                        <TouchableOpacity {...props} onPress={() => getNavigationName()} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
