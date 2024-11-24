import { useEffect, useState } from "react"
import { Button } from "react-native"

export default function CurrentSetCounter({ rangeLo, rangeHi }) {

    const [currentSetsText, setCurrentSetsText] = useState('')
    const [countSets, setCountSets] = useState(0)
    const [isSetComplete, setIsSetComplete] = useState(false)

    useEffect(() => {
        renderSets()
    }, [countSets])

    function renderSets() {
        let result = ''

        for (let i = 0; i < rangeHi; i++)
            result += i < countSets ? '🟢' : '🟡'

        setCurrentSetsText(result)

        if (countSets === rangeHi)
            setIsSetComplete(true)
    }

    const handleSetCountPress = () => {
        if (!isSetComplete)
            setCountSets(countSets + 1)
        else {
            // move onto next exercise
        }
    }

    return <Button
        title={currentSetsText}
        onPress={() => handleSetCountPress()}
    />
}