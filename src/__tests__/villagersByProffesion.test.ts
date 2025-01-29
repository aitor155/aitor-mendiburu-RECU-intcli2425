import { megaEpicFortress } from "../data/data"
import { countVillagersByProfession } from "../helpers/helpers"


describe ("villagers by profession", ()=> {
    it("should return all professions of villager", ()=> {
        const villagers = countVillagersByProfession(megaEpicFortress);
        console.log(villagers);
        expect(villagers?.length).toBeGreaterThan(0);
        expect(villagers?.length).toBe(6);
    })
})