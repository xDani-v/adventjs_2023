function optimizeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let lastInterval = result[result.length - 1];
        let currentInterval = intervals[i];

        if (currentInterval[0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
        } else {
            result.push(currentInterval);
        }
    }

    return result;
}

result = optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
]) // [[2, 8]]

console.log(result)
