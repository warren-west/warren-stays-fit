import { FlatList, Image, StyleSheet } from 'react-native'

export default function WorkoutImageCarousel({ pictures }) {

    return (
        <FlatList
            data={pictures}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            renderItem={({ item }) => <Image source={item} style={ style.pictureCarousel } />}
        />
    )
}

const style = StyleSheet.create({
    pictureCarousel: {
        width: 76,
        height: 76,
        borderRadius: 12,
    }
})