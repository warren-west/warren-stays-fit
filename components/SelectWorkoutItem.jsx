import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
import { styles } from "../src/styling"
import { Image } from "expo-image"
import { MOBILITY_SUFFIX } from '../src/utils.js'

export default function SelectWorkoutItem({ exerciseObj }) {
    const pathname = exerciseObj.title.endsWith(MOBILITY_SUFFIX) ? '/mobility' : '/workout'

    return (
        <Link style={_styles.link} href={{
            pathname,
            params: { exerciseId: exerciseObj.id }
        }}>
            <View style={_styles.container} >
                <Image source={exerciseObj.picture + "?auto=compress&cs=tinysrgb&w=150"} style={styles.workoutItemImage} />
                <Text style={styles.lightText} >
                    {exerciseObj.title}
                </Text>
            </View>
        </Link>
    )
}

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    link: {
        marginLeft: 10,
        marginBottom: 10,
    }
})