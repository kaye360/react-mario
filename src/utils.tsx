

export function isCollide(a: HTMLDivElement, b: HTMLDivElement) : boolean {

    // Credit here: https://stackoverflow.com/questions/2440377/javascript-collision-detection

    if(!a || !b) return false

    const aRect = a.getBoundingClientRect()
    const bRect = b.getBoundingClientRect()

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}