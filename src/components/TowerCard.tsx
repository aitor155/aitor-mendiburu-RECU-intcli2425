import { FunctionComponent } from "react";

interface Tower {
    name: string,
    guards: string[]
}

interface TowerCardProps {
    towersToShow: Tower[]
}
 
const TowerCard: FunctionComponent<TowerCardProps> = ({towersToShow}) => {
    return (
        <div className="grid grid-row">
            <div className="">
              {towersToShow?.map((tower) => (
                <>
                <h1>{tower.name}</h1>
                {tower.guards.map((guard, index)=> (
                    <li key={index} className="flex flex-row list-node justify-between items-center text-center justify-center">{guard}</li>
                ))}
                </>
              ))}
            </div>
        </div>
      );
}
 
export default TowerCard;