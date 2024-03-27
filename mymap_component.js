import React from 'react';
import MapView from "react-native-maps";
import { View, Text, StyleSheet } from 'react-native';

export default class MyMap extends React.Component {
    render() {
        return (
            <MapView style={{ ...StyleSheet.absoluteFillObject }}
                provider="google"
                ref={(ref) => { this.mapRef = ref }}
                initialRegion={{
                    latitude: 25.0366794,
                    longitude: 121.5175599,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
            </MapView>
        );
    }
}