import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get("window");
export const CARD_HEIGHT = 220;
export const CARD_WIDTH = width * 0.8;
export const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        flexDirection: 'row',
        shadowOffset: { x: 2, y: -2 },
        // height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        alignSelf: "center",
    },
});
