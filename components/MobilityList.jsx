import { ScrollView, Text, View } from "react-native"
import { styles } from "../src/styling.js"
import MobilityListItem from "./MobilityListItem.jsx"
import { getExerciseById } from '../src/db.js'
// import Timer from "./Timer"

export default function MobilityList({ exerciseId }) {
    const selectedExercise = getExerciseById(exerciseId)

    const renderMobilityListItems = () => selectedExercise.exerciseList.map((item, idx) =>
        <MobilityListItem
            key={idx}
            title={item.mobTitle}
            picture={item.picture}
            duration={item.duration}
            isDouble={item.isDouble}
        />)

    return (
        <>
            <View style={{flex: 5}}>
                <ScrollView style={styles.workoutContainer}>
                    <Text style={styles.headerText}>{selectedExercise.title}</Text>
                    {renderMobilityListItems()}
                </ScrollView>
            </View>
            <View style={styles.timerContainer}>
                {/* <Timer /> */}
            </View>
        </>
    )
}