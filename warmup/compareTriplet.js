function compareTriplets(a, b) {
    let aCount = 0, bCount = 0;

    for (let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            aCount++;
        } else if(a[i] < b[i]) {
            bCount++;
        }
    }
    return [ aCount, bCount ];
}