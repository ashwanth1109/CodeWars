//===========================================
// HUMAN READABLE DURATION FORMAT
// 4 kyu
//===========================================

formatDuration = (time, formatArray = []) => {
    if (time === 0) return "now"; // handling 0 case
    const handleOne = str => `1 ${str}`; // common function to handle one of something
    //===========================================
    // Function to format string and add it to beginning of array
    //===========================================
    const formatString = (arr, time, str, val, divFactor) => {
        if (val === 0) {
            time = time / divFactor;
            return [arr, time];
        }
        val === 1 ? arr.unshift(handleOne(str)) : arr.unshift(`${val} ${str}s`);
        time = (time - val) / divFactor;
        return [arr, time];
    };
    //===========================================
    // Calculating seconds
    //===========================================
    [formatArray, time] = formatString(
        formatArray,
        time,
        "second",
        time % 60,
        60
    );
    //===========================================
    // Calculating minutes
    //===========================================
    [formatArray, time] = formatString(
        formatArray,
        time,
        "minute",
        time % 60,
        60
    );
    //===========================================
    // Calculating hours
    //===========================================
    [formatArray, time] = formatString(
        formatArray,
        time,
        "hour",
        time % 24,
        24
    );
    //===========================================
    // Calculating days
    //===========================================
    [formatArray, time] = formatString(
        formatArray,
        time,
        "day",
        time % 365,
        365
    );
    //===========================================
    // Calculating years
    //===========================================
    [formatArray, time] = formatString(formatArray, time, "year", time, 1);
    return formatArray;
};

//===========================================
// TEST CASES
//===========================================
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(3662));
console.log(formatDuration(99999999));
