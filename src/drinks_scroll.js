import React, { useEffect } from 'react';
import { Image, View, Animated } from 'react-native';

import { styles, CARD_WIDTH, SPACING_FOR_CARD_INSET } from './styles.js'
import { markers } from './fake_markers.js'

this.state = {
    markers: markers
};

export default function DrinksScroll(props) {
    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);

    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3);
            if (index >= state.markers.length) {
                index = state.markers.length - 1;
            }

            if (index <= 0) {
                index = 0;
            }

            clearTimeout(regionTimeout);

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;
                    const { latlng } = state.markers[index];
                    props.map_ref.current.animateToRegion(
                        {
                            ...latlng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        },
                        350
                    );
                }
            }, 10);
        });
    })

    return (
        <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + 20}
            snapToAlignment="center"
            style={styles.scrollView}
            contentInset={{
                top: 0,
                left: SPACING_FOR_CARD_INSET,
                bottom: 0,
                right: SPACING_FOR_CARD_INSET
            }}
            contentContainerStyle={{
                paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
            }}
            onScroll={Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: mapAnimation,
                            }
                        },
                    },
                ],
                { useNativeDriver: true }
            )}
        >
            {state.markers.map((marker, index) => (
                <View style={styles.card} key={index}>
                    {marker.drinks.map((img, index) => (
                        <Image
                            style={styles.cardImage}
                            source={img}
                            key={index}
                            resizeMode='cover'
                        />
                    ))}
                </View>
            ))}
        </Animated.ScrollView>
    )
}