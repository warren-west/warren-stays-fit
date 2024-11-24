import { useNavigation } from "expo-router"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { MOBILITY_SUFFIX } from "../src/utils"
import { styles } from "../src/styling"
import { Image } from "expo-image"

export default function SelectWorkoutItem({ workoutObj }) {

    const navigation = useNavigation()

    const handleWorkoutSelected = () => {
        if (workoutObj.title.endsWith(MOBILITY_SUFFIX))
            navigation.navigate('MobilityList', { selectedMobility: workoutObj, name: `Mobility: ${workoutObj.title}` })
        else
            navigation.navigate('WorkoutList', { selectedWorkout: workoutObj, name: `Workout: ${workoutObj.title}` })
    }

    return (
        <TouchableOpacity style={_styles.container} onPress={() => handleWorkoutSelected()}>
            <Image source={workoutObj.picture + "?auto=compress&cs=tinysrgb&w=150"} style={styles.workoutItemImage} />
            <Text style={styles.lightText} onPress={() => handleWorkoutSelected()}>
                {workoutObj.title}
            </Text>
        </TouchableOpacity>
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