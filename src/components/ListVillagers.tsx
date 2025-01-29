import { FunctionComponent } from "react";
import MegaEpicFortress from "../types/MegaEpicFortress"
import { countVillagersByProfession } from "../helpers/helpers";

interface VillagersProps {
    tower: MegaEpicFortress
}
 
const VillagersToShow : FunctionComponent<VillagersProps> = ({tower}) => {
    const villagers = countVillagersByProfession(tower);
    return (
        <div className="">
              {villagers?.map((villager, index) => (
                <li key={index} className="flex flex-row list-node justify-between items-center text-center justify-center">{villager.type}: {villager.count} </li>
              ))}
        </div>
      );
}
 
export default VillagersToShow;