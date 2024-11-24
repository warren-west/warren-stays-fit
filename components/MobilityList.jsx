import { ScrollView, Text, View } from "react-native"
import { styles } from "../src/styling.js"
import MobilityListItem from "./MobilityListItem"
import Timer from "./Timer"

export default function MobilityList({ route }) {
    // get route params
    const { selectedMobility } = route.params

    const renderMobilityListItems = () => selectedMobility.exerciseList.map((item, idx) =>
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
                    <Text style={styles.headerText}>{selectedMobility.title}</Text>
                    {renderMobilityListItems()}
                </ScrollView>
            </View>
            <View style={styles.timerContainer}>
                <Timer />
            </View>
        </>
    )
}