import WorkoutList from "../components/WorkoutList.jsx"
import { useLocalSearchParams } from 'expo-router'

export default function ExercisePage() {
  const params = useLocalSearchParams()
  const { exerciseId } = params

  return <WorkoutList exerciseId={exerciseId} />
}