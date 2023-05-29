function isValid(x) {

    return !isNaN(x);
}

function parseTable(cells) {
    let points = []

    let point;
    for (let i = 0; i < cells.length; i += 2) {
        point = {}
        point.x = parseFloat(cells[i])
        point.y = parseFloat(cells[i + 1])
        console.log(point.x + " " + point.y)

        if (isValid(point.x) && isValid(point.y)) {
            points.push(point)
        }
    }

    return points
}