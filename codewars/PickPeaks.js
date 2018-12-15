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
    // OOPS, I MISREAD THE QUESTION. DAMN! SO MUCH FOR INSTINCTS
    //===========================================
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i + 1] && arr[i + 1]) {
            if (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) {
                pos.push(i + 1);
                peaks.push(arr[i + 1]);
            }
        }
    }
    return {
        pos: pos,
        peaks: peaks
    };
};

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
