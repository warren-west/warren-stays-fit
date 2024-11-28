import MobilityList from "../components/MobilityList.jsx"
import { useLocalSearchParams } from 'expo-router'

export default function ExercisePage() {
  const params = useLocalSearchParams()
  const { exerciseId } = params

  return <MobilityList exerciseId={exerciseId} />
}