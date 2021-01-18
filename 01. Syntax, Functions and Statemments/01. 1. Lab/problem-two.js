function treeStrings(stringOne, stringTwo, stringThree) {
    let totalLength = stringOne.length + stringTwo.length + stringThree.length;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

treeStrings('chocolate', 'ice cream', 'cake');
treeStrings('pasta', '5', '22.3')
