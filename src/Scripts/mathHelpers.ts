export function getPi(): number {
    return 3.14;
}

/**
 * Gets the Arc Length for displaying a circle arc used on a SVG
 * @param radius
 * @returns
 */
export function getArcLength(radius: number): number {
    return 2 * getPi() * radius;
}

/**
 * Gets the Arc Offset for displaying a percentage of a circle arc used on a SVG
 * @param radius
 * @param percent
 * @param arcLength
 * @returns
 */
export function getArcOffset(
    radius: number,
    percent: number,
    arcLength: number | null = null
): number {
    let arcLen = arcLength;
    if (arcLength === null) {
        arcLen = getArcLength(radius);
    }
    return arcLen * ((100 - percent) / 100);
}

/**
 * Caclulates the percentage of a value between a min and max
 * @param currentValue
 * @param max
 * @param min
 * @returns
 */
export function calculatePercent(
    currentValue: number,
    max: number,
    min: number
): number {
    return (currentValue / (max - min)) * 100;
}
