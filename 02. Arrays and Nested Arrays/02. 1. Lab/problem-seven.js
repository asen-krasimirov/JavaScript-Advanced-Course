

function pieceOfPie (pies, ...targets) {
    const startIndex = pies.indexOf(targets[0]);
    const endIndex = pies.indexOf(targets[1]) + 1;

    return pies.slice(startIndex, endIndex);
}


console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));

console.log('\nDELIMITER\n')

console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));