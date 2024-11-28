import { ScrollView, Text, View } from "react-native"
import WorkoutListItem from "./WorkoutListItem"
import { styles } from "../src/styling"
import { getExerciseById } from "../src/db.js"
import Timer from './Timer'

export default function WorkoutList({ exerciseId }) {
    const selectedExercise = getExerciseById(exerciseId)

    const renderWorkoutListItems = () => selectedExercise.exerciseList.map((item, idx) =>
        <WorkoutListItem
            key={idx}
            title={item.workoutTitle}
            picture={item.picture}
            repRangeHi={item.repRangeHi} repRangeLo={item.repRangeLo}
            restRangeHi={item.restRangeHi} restRangeLo={item.restRangeLo}
            setRangeHi={item.setRangeHi} setRangeLo={item.setRangeLo}
        />)

    return (
        <>
            <View style={{flex: 5}}>
                <ScrollView style={styles.workoutContainer}>
                    <Text style={styles.headerText}>{selectedExercise.title}</Text>
                    {renderWorkoutListItems()}
                </ScrollView>
            </View>
            <View style={styles.timerContainer}>
                <Timer />
            </View>
        </>
    )
}