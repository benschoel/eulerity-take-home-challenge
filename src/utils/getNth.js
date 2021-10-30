const getNth = (arr, j) => {
    const toReturn = [];

    for (let i = j; i < arr.length; i += 4) {
        toReturn.push(arr[i]);
    }

    return toReturn;
};

export { getNth };
