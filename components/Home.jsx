import { ScrollView, Text } from "react-native"
import SelectWorkoutItem from '../components/SelectWorkoutItem.jsx'
import { styles } from "../src/styling.js"
import { exercises } from '../src/db.js'

export default function Home() {
    const renderWorkoutItems = () => exercises.map((item) => <SelectWorkoutItem exerciseObj={item} key={item.id} />)

    return (
        <ScrollView style={styles.workoutContainer}>
            <Text style={styles.headerText}>Select a workout:</Text>
            {renderWorkoutItems()}
        </ScrollView>
    )
}