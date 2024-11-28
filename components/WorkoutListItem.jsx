import { Image, Text, View } from "react-native"
import CurrentSetCounter from "./CurrentSetCounter"
import { styles } from "../src/styling"
import { getImage } from "../src/utils"
// import { Image } from "expo-image"


export default function WorkoutListItem({ title, picture, repRangeLo, repRangeHi, setRangeLo, setRangeHi, restRangeLo, restRangeHi }) {
    return (
        <>
            <View style={{ flex: 1, flexDirection: "row", marginLeft: 10, marginBottom: 10 }}>
                <View style={{ flex: 2 }}>
                    <Image source={getImage(picture)} style={styles.workoutListItemImage} />
                </View>
                <View style={{ flex: 7, marginLeft: 10 }}>
                    <Text style={styles.lightBoldText}>{title}</Text>
                    <Text style={styles.lightText}>Sets: {setRangeLo} - {setRangeHi}</Text>
                    <Text style={styles.lightText}>Reps: {repRangeLo} - {repRangeHi}</Text>
                    <Text style={styles.lightText}>Rest: {restRangeLo}{restRangeLo != restRangeHi && ` - ${restRangeHi}`}</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
                <CurrentSetCounter rangeLo={setRangeLo} rangeHi={setRangeHi} />
            </View>
        </>
    )
}