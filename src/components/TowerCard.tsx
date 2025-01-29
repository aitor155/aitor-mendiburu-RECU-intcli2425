import { FunctionComponent } from "react";
import { Towers } from "../types/MegaEpicFortress";



interface TowerCardProps {
    towersToShow?: Towers[]
}
 
const TowerCard: FunctionComponent<TowerCardProps> = ({towersToShow}) => {
    return (
        <div className="flex flex-col items-center w-full align-center">
            <div className="w-full text-center">
              {towersToShow?.map((tower, index) => (
                <div key={index} className="border rounded m-2">
                <h1 className="text-sm font-bold mb-2">{tower.name}</h1>
                {tower.guards.map((guard, index)=> (
                    <li key={index} className="flex flex-row list-node justify-between items-center text-center justify-center">{guard.name}</li>
                ))}
                </div>
              ))}
            </div>
        </div>
      );
}
 
export default TowerCard;