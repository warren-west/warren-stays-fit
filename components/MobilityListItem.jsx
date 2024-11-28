import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { styles } from "../src/styling.js"
import { getImage } from '../src/utils.js'
import WorkoutImageCarousel from "./WorkoutImageCarousel"
import { Image } from "expo-image"

export default function MobilityListItem({ title, picture, duration, isDouble }) {
    const [isComplete, setIsComplete] = useState(false)

    const handleCompleteMobility = () => setIsComplete(true)

    return (
        <View style={style.mobilityListItemContainer} >
            <View style={{ flex: 2 }}>
                {Array.isArray(picture) && <WorkoutImageCarousel pictures={picture} /> || <Image source={getImage(picture)} style={styles.workoutListItemImage} />}
            </View>
            <Pressable style={{ flex: 7, marginLeft: 10 }}
                onPress={() => handleCompleteMobility()}>
                <Text style={styles.lightBoldText}>{title} {isComplete && '🟢' || '🟡'}</Text>
                <Text style={styles.lightText}>Duration: {duration}</Text>
                <Text style={styles.lightText}>Is Double: {isDouble.toString()}</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    mobilityListItemContainer: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 10,
        marginBottom: 10,
    }
})