const data = [
    [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 }
    ],
    [
        { id: 3, name: 'Bob', age: 35 }
    ]
];

function extractNames(dataArray) {
    return dataArray.flat().map(item => item.name);
}

// Example usage
const names = extractNames(data);
console.log(names); // Output: ['John', 'Jane', 'Bob']