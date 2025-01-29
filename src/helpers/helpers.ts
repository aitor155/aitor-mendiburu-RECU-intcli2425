import MegaEpicFortress from "../types/MegaEpicFortress"



export const getTowersAndGuardsByWeaponType = (fortress : MegaEpicFortress, weaponType: string)=> {

    const towersByWeapon = fortress.defenses.towers.filter((tower)=> tower.armament.weaponType === weaponType);

    const towersByName_Guardians = towersByWeapon.map((tower)=> {
        const towerName_Guards = {name: tower.name, guards: tower.guards};
        return towerName_Guards;
    })
    return towersByName_Guardians;
}



// interface Profession {
//     type: professionName,
//     count: professionCount
// }
// type professionName  = Record<"type", string>
// type professionCount = Record<"count", number>



export const countVillagersByProfession = (fortress: MegaEpicFortress)=> {

    const villagersByRole = fortress.inhabitants.roles.filter((role)=> role.role === "Villager");
    
    if (villagersByRole != undefined) {
        const villagers = villagersByRole[0].professions;
        return villagers
    }

    
    // for (let i = 0; i < villagersByRole.length; ++i) {
    //     villagers.concat(villagersByRole[i].professions);
    // }

    return undefined
}