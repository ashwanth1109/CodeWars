//===========================================
// PICK PEAKS
// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
//===========================================

pickPeaks = (arr, pos = [], peaks = []) => {
    // //===========================================
    // // YAY, FINALLY I AM ABLE TO USE SPREAD ON INSTINCT
    // //===========================================
    // const max = Math.max(...arr);
    // peaks.push(max);
    //===========================================
    // OOPS, I MISREAD THE QUESTION. DAMN! SO MUCH FOR INSTINCTS -_-
    //===========================================
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
            pos.push(i);
            peaks.push(arr[i]);
        } else if (arr[i - 1] < arr[i] && arr[i] === arr[i + 1]) {
            //===========================================
            // CHECK IF THIS IS A PLATEAU
            //===========================================
            let flag = i + 1;
            while (arr[flag] && arr[flag + 1]) {
                if (arr[flag] > arr[flag + 1]) {
                    pos.push(i);
                    peaks.push(arr[i]);
                    break;
                } else if (arr[flag] < arr[flag + 1]) {
                    break;
                } else {
                    flag++;
                    continue;
                }
            }
        }
    }
    return {
        pos: pos,
        peaks: peaks
    };
};

//===========================================
// TIME TO REFACTOR
//===========================================
//===========================================
// MAYBE POSSIBLE TO USE REDUCE?
//===========================================
pickPeaks1 = arr => {
    return ({ pos, peaks } = arr.reduce(
        (acc, val) => {
            if (acc.prevPrevValue !== null && acc.prevValue !== null) {
                if (acc.prevValue > acc.prevPrevValue && acc.prevValue > val) {
                    acc.peaks.push(acc.prevValue);
                    acc.pos.push(acc.iter);
                }
            }
            acc.prevPrevValue = acc.prevValue;
            acc.prevValue = val;
            acc.iter = acc.iter + 1;
        },
        {
            prevPrevValue: null,
            prevValue: null,
            peaks: [],
            pos: [],
            iter: 0
        }
    ));
};

//===========================================
// TEST CASE
//===========================================
console.log(pickPeaks1([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
