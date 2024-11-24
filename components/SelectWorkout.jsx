import { workouts, mobility } from '../src/db.js'
import SelectWorkoutItem from './SelectWorkoutItem.jsx'
import { Text } from 'react-native'
import { styles } from '../src/styling.js'

export default function SelectWorkout() {

    const sortedCombinedArray = [
        ...workouts,
        ...mobility,
    ].sort((a, b) => b.title - a.title)


    const renderWorkoutItems = () => sortedCombinedArray.map((item) => <SelectWorkoutItem workoutObj={item} key={item.id} />)

    return (
        <>
            <Text style={styles.headerText}>Select a workout:</Text>
            {renderWorkoutItems()}
        </>
    )
}