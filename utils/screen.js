export function isMediumDevice() {
    return window.matchMedia("(min-width: 768px)").matches
}

export function isSmallDevice() {
    return window.matchMedia("(max-width: 425px)").matches
}