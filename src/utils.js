export const calcColorTime = function (countdownTime) {
    return [
        countdownTime,
        Math.ceil(countdownTime / 2),
        5,
        0
    ]
}

export const MOBILITY_SUFFIX = "mobility"

const imageMap = [
    [require("../assets/images/exercises/pike-pushups.webp"), "../assets/images/exercises/pike-pushups.webp"],
    [require("../assets/images/exercises/dips.webp"), "../assets/images/exercises/dips.webp"],
    [require("../assets/images/exercises/pushups.webp"), "../assets/images/exercises/pushups.webp"],
    [require("../assets/images/exercises/pullups.webp"), "../assets/images/exercises/pullups.webp"],
    [require("../assets/images/exercises/band-pullups.webp"), "../assets/images/exercises/band-pullups.webp"],
    [require("../assets/images/exercises/australian-pullups.webp"), "../assets/images/exercises/australian-pullups.webp"],
    [require("../assets/images/exercises/pistol-squats.webp"), "../assets/images/exercises/pistol-squats.webp"],
    [require("../assets/images/exercises/side-squats.webp"), "../assets/images/exercises/side-squats.webp"],
    [require("../assets/images/exercises/plyo-stepups.webp"), "../assets/images/exercises/plyo-stepups.webp"],
    [require("../assets/images/exercises/single-leg-romanian-deadlift.webp"), "../assets/images/exercises/single-leg-romanian-deadlift.webp"],
    [require("../assets/images/exercises/pullups.webp"), "../assets/images/exercises/pullups.webp"],
    [require("../assets/images/exercises/pike-pushups.webp"), "../assets/images/exercises/pike-pushups.webp"],
    [require("../assets/images/exercises/band-pullups.webp"), "../assets/images/exercises/band-pullups.webp"],
    [require("../assets/images/exercises/clap-pushups.webp"), "../assets/images/exercises/clap-pushups.webp"],
    [require("../assets/images/exercises/australian-pullups.webp"), "../assets/images/exercises/australian-pullups.webp"],
    [require("../assets/images/exercises/dips.webp"), "../assets/images/exercises/dips.webp"],
    [require("../assets/images/exercises/child.webp"), "../assets/images/exercises/child.webp"],
    [require("../assets/images/exercises/deep-squat.webp"), "../assets/images/exercises/deep-squat.webp"],
    [require("../assets/images/exercises/shoulder-stand.webp"), "../assets/images/exercises/shoulder-stand.webp"],
    [require("../assets/images/exercises/lat-stretch.webp"), "../assets/images/exercises/lat-stretch.webp"],
    [require("../assets/images/exercises/lat-stretch2.webp"), "../assets/images/exercises/lat-stretch2.webp"],
    [require("../assets/images/exercises/pigeon.webp"), "../assets/images/exercises/pigeon.webp"],
    [require("../assets/images/exercises/frog.webp"), "../assets/images/exercises/frog.webp"],
    [require("../assets/images/exercises/forward-roll.webp"), "../assets/images/exercises/forward-roll.webp"],
    [require("../assets/images/exercises/wrist-extension.webp"), "../assets/images/exercises/wrist-extension.webp"],

]

export function getImage(picture) {
    let result = imageMap.find(item => item[1] === picture)[0]
    
    if (!result)
        return imageMap[0][0]

    return result
}