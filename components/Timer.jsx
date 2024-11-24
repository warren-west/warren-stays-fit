import { useState } from 'react'
import { Button, Pressable, Text, View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { calcColorTime } from '../src/utils'
import { styles, COUNTDOWN_COLORS } from '../src/styling'
import { useAudioPlayer } from 'expo-audio'

export default function Timer({ isDouble = false }) {
    const DEFAULT_TIME = 60

    // time to count down in seconds
    const [timerKey, setTimerKey] = useState(0)
    const [timeToCountDown, setTimeToCountDown] = useState(DEFAULT_TIME)
    const [isPlaying, setIsPlaying] = useState(false)    

    // timer sounds
    const finishedAudio = useAudioPlayer('assets/audio/finished.wav')
    const chirpAudio = useAudioPlayer('assets/audio/chirp.wav')

    const handleToggleIsPlaying = () => setIsPlaying(!isPlaying)

    const handleTimerCompletes = () => {
        // when the timer completes
        finishedAudio.play()
        setIsPlaying(false)

        if (isDouble)
            return [true, delay(12000), newInitialRemainingTime(60000)]
    }

    const handleIncrementTimer = (seconds) => {
        setTimeToCountDown(timeToCountDown + seconds)
    }

    const handleResetTimer = () => {
        setTimerKey(timerKey + 1) // reset the timer
        setIsPlaying(false)
        setTimeToCountDown(DEFAULT_TIME)
    }

    return (
        <View style={styles.timerFlex}>
            <View style={styles.timerButtonGroup}>
                <View style={styles.timerButton}>
                    <Button title='+30' color={COUNTDOWN_COLORS[1]}
                        onPress={() => handleIncrementTimer(30)}
                    />
                </View>
                <View style={styles.timerButton}>
                    <Button title='+10' color={COUNTDOWN_COLORS[0]}
                        onPress={() => handleIncrementTimer(10)}
                    />
                </View>
            </View>
            <Pressable style={styles.timer} onPress={() => handleToggleIsPlaying()} >
                <CountdownCircleTimer
                    key={timerKey}
                    size={100}
                    isPlaying={isPlaying}
                    duration={timeToCountDown}
                    colors={COUNTDOWN_COLORS}
                    colorsTime={calcColorTime(timeToCountDown)}
                    isSmoothColorTransition={false}
                    onComplete={() => handleTimerCompletes()}
                    onUpdate={(remainingTime) => {
                        if (remainingTime > 0 && remainingTime < 6)
                            chirpAudio.play()
                    }}
                >
                    {({ remainingTime }) => <Text style={styles.timerText}>{remainingTime}</Text>}
                </CountdownCircleTimer>
            </Pressable>
            <Button title='Reset' color={COUNTDOWN_COLORS[2]}
                onPress={() => handleResetTimer()}
            />
        </View>
    )
}