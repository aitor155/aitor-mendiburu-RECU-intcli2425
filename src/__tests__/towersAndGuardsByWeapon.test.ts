import { megaEpicFortress } from "../data/data"
import { getTowersAndGuardsByWeaponType } from "../helpers/helpers"

describe ("towers by weapon type", ()=> {
    it("should return all correct towers name and guards by weapon type", ()=> {
        const towersByWeapon = getTowersAndGuardsByWeaponType(megaEpicFortress, "Ballista");
        console.log(JSON.stringify(towersByWeapon));
        expect(towersByWeapon.length).toBe(2);
    })
})