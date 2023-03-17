export const locateActiveElement = (parentEl, elementIndex) => {


    const width = parentEl.clientWidth;
    const scrollWidth = parentEl.scrollWidth;
    const maxScollLeft = scrollWidth - width;
    const _1unit = maxScollLeft / 24;

    if ([20, 21, 22, 23].includes(elementIndex)) {
        parentEl.scroll({
            left: (maxScollLeft),
            behavior: "smooth"
        })
        return
    }
    else if ([0, 1, 2, 3].includes(elementIndex)) {
        parentEl.scroll({
            left: (0),
            behavior: "smooth"
        })
        return
    }
    else
        parentEl.scroll({
            left: (elementIndex * _1unit),
            behavior: "smooth"
        })
}