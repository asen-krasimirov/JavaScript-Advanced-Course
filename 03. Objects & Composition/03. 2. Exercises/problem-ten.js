

function heroCreator(health = 100, specialStat = 100) {
    
    const canCast = (obj) => {
        const cast = (spell) => {
            obj.mana--;
            console.log(`${obj.name} cast ${spell}`);
        };
        obj['cast'] = cast;
    }

    const canFight = (obj) => {
        const fight = () => {
            obj.stamina--;
            console.log(`${obj.name} slashes at the foe!`);
        };
        obj['fight'] = fight;
    }

    const defaultHero = (name) => { return {
        name,
        health
    }; }

    const mageCreator = (name) => {
        const mage = defaultHero(name);
        mage['mana'] = specialStat;
        canCast(mage);
        return mage;
    }
    const fighterCreator = (name) => {
        const fighter = defaultHero(name);
        fighter['stamina'] = specialStat;
        canFight(fighter);
        return fighter;
    }

    return {fighter: fighterCreator, mage: mageCreator};
}


let create = heroCreator();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
