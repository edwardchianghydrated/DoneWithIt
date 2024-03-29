import React from 'react';
import MapView, { Marker } from "react-native-maps";
import { View, Text, StyleSheet } from 'react-native';

import { markers } from './fake_markers.js'

export default function MyMap(props) {
    this.state = {
        markers: markers
    };

    return (
        <MapView style={{ ...StyleSheet.absoluteFillObject }}
            provider="google"
            // ref={(ref) => { this.mapRef = ref }}
            ref={props.map_ref}
            initialRegion={{
                latitude: 25.0366794,
                longitude: 121.5175599,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
            {this.state.markers.map((marker, index) => (
                <Marker
                    key={index}
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                />
            ))}
        </MapView>
    );
}