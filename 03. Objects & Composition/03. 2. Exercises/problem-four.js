

function heroInventory(data) {
    const result = [];
    data.forEach(heroData => {
        let [name, level, items] = heroData.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({name, level, items});
    });
    return JSON.stringify(result);
}


// console.log(heroInventory(['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']
// ));

console.log(heroInventory(['Jake / 1000 / Gauss, HolidayGrenade']));