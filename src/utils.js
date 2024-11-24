export const calcColorTime = function (countdownTime) {
    return [
        countdownTime,
        Math.ceil(countdownTime / 2),
        5,
        0
    ]
}

export const MOBILITY_SUFFIX = "mobility"