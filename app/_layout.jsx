import { Stack } from "expo-router"

export default function RootLayout() {

    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="mobility"
                options={{headerTitle: "Mobility"}}
            />
            <Stack.Screen
                name="workout"
                options={{headerTitle: "Workout"}}
            />
        </Stack>
    )
}