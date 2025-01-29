import {MegaEpicFortress} from "../types/MegaEpicFortress"



export const getTowersAndGuardsByWeaponType = (fortress : MegaEpicFortress, weaponType: string)=> {

    const towersByWeapon = fortress.defenses.towers.filter((tower)=> tower.armament?.weaponType === weaponType);

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

///record type ???



export const countVillagersByProfession = (fortress: MegaEpicFortress)=> {

    const villagersByRole = fortress.inhabitants.roles.find((role)=> role.role === "Villager");
    
    if (villagersByRole != undefined) {
        const villagers = villagersByRole.professions;
        return villagers
    }

    return undefined
}