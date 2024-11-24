import { ScrollView, Text, View } from "react-native"
import Timer from './Timer'
import WorkoutListItem from "./WorkoutListItem"
import { styles } from "../src/styling"

export default function WorkoutList({ route }) {
    // get route params
    const { selectedWorkout } = route.params

    const renderWorkoutListItems = () => selectedWorkout.exerciseList.map((item, idx) =>
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
                    <Text style={styles.headerText}>{selectedWorkout.title}</Text>
                    {renderWorkoutListItems()}
                </ScrollView>
            </View>
            <View style={styles.timerContainer}>
                <Timer />
            </View>
        </>
    )
}