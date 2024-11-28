import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
import { styles } from "../src/styling"
import { Image } from "expo-image"
import { MOBILITY_SUFFIX } from '../src/utils.js'

export default function SelectWorkoutItem({ exerciseObj }) {
    const pathname = exerciseObj.title.endsWith(MOBILITY_SUFFIX) ? '/mobility' : '/workout'

    return (
        <View style={_styles.container} >
            <Link href={{
                pathname,
                params: { exerciseId: exerciseObj.id }
            }}>
                <Image source={exerciseObj.picture + "?auto=compress&cs=tinysrgb&w=150"} style={styles.workoutItemImage} />
                <Text style={styles.lightText} >
                    {exerciseObj.title}
                </Text>
            </Link>
        </View>
    )
}

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginBottom: 8,
    }
})