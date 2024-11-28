import { Image } from 'expo-image'
import { FlatList, StyleSheet } from 'react-native'
import { getImage } from '../src/utils'

export default function WorkoutImageCarousel({ pictures }) {

    return (
        <FlatList
            data={pictures}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            renderItem={({ item }) => <Image source={getImage(item)} style={ style.pictureCarousel } />}
        />
    )
}

const style = StyleSheet.create({
    pictureCarousel: {
        width: 76,
        height: 76,
        borderRadius: 12,
        borderColor:"red",
        borderWidth:1,
    }
})