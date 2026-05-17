function flattenProducts(nestedArray) {
    let flatList = [];
    for (let i = 0; i < nestedArray.length; i++) {
        for (let j = 0; j < nestedArray[i].length; j++) {
            flatList.push(nestedArray[i][j]);
        }
    }
    return flatList;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    let equal = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price < pivot.price) {
            left.push(arr[i]);
        } else if (arr[i].price > pivot.price) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
    }
    return quickSort(left).concat(equal, quickSort(right));
}

function binarySearchByPrice(sortedArr, targetPrice) {
    let low = 0;
    let high = sortedArr.length - 1;
    let results = [];
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (sortedArr[mid].price === targetPrice) {
            let leftIdx = mid;
            while (leftIdx >= 0 && sortedArr[leftIdx].price === targetPrice) {
                results.push(sortedArr[leftIdx]);
                leftIdx--;
            }
            let rightIdx = mid + 1;
            while (rightIdx < sortedArr.length && sortedArr[rightIdx].price === targetPrice) {
                results.push(sortedArr[rightIdx]);
                rightIdx++;
            }
            return results;
        } else if (sortedArr[mid].price < targetPrice) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return results;
}

function searchAndSortModern(dataArray, targetPrice) {
    console.time("ModernProcess");
    let flatData = flattenProducts(dataArray);
    let sortedData = quickSort(flatData);
    let searchResult = binarySearchByPrice(sortedData, targetPrice);
    console.timeEnd("ModernProcess");
    return searchResult;
}