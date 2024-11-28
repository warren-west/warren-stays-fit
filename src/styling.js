import { StyleSheet } from "react-native"

const colors = {
    darkGray: "#1e1f20",
    medGray: "#202124",
    lightGray: "#303030",
    light: "#d1e1ff",
    white: "#ff2222",
    green: "#00A300",
    yellow: "#F7B801",
    red: "#A30000"
}

export const COUNTDOWN_COLORS = [
    colors.green,
    colors.yellow,
    colors.red,
]

export const styles = StyleSheet.create({
    workoutContainer: {
        flex: 3,
        backgroundColor: colors.darkGray,
        color: colors.light,
    },
    timerFlex: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
    },
    timerContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.lightGray,
    },
    headerText: {
        color: colors.light,
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        alignSelf: "center"
    },
    lightText: {
        color: colors.light,
    },
    lightBoldText: {
        fontWeight: "bold",
        color: colors.light,
    },
    timer: {
        marginHorizontal: 20,
    },
    timerButtonGroup: {
        flex: 1,
        alignContent: "space-evenly",
    },
    timerButton: {
        marginVertical: 4,
        color: colors.medGray,
    },
    timerText: {
        color: colors.light,
    },
    workoutItemImage: {
        marginRight: 10,
        width: 60,
        height: 60,
        borderRadius: 24,
    },
    workoutListItemImage: {
        marginRight: 10,
        width: "100%",
        borderRadius: 12,
        aspectRatio: 1,
    },
})