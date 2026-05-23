function getFirstItem<T>(arr: Array<T>): T | null { // <T> allows for the use of any type within the array
    if(arr.length === 0){
        return null;
    }

    return arr[0] ?? null; // If the first item is undefined, return null to comply with the function's return type.
}

console.log(getFirstItem([1, 2, 3]));

console.log(getFirstItem(["Hello", "World", "What's going on?"]));