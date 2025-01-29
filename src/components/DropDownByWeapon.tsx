import { FunctionComponent, useEffect, useState } from "react";
import MegaEpicFortress from "../types/MegaEpicFortress";
import { getTowersAndGuardsByWeaponType } from "../helpers/helpers";

interface DropDownProps {
    fortress: MegaEpicFortress,
    setShowTowers: (towers: Tower[]) => void
}

const options = [
    {value: " ", label: "----"},
    {value: "Ballista" , label: "Ballista"},
    {value: "Arcane Cannon", label: "Arcane Cannon"},
    {mythic: "Elemental Bow", label: "Elemental Bow"},
    {mythic: "Banana Launcher", label: "Banana Launcher"},
];
 
const DropDownByWeapon: FunctionComponent<DropDownProps> = ({fortress, setShowTowers}) => {
    const [selectedWeapon, setSelectedWeapon] = useState<string>("");

    //values of useRef
    useEffect(()=> {
        const towersToShow = getTowersAndGuardsByWeaponType(fortress, selectedWeapon);
        setShowTowers(towersToShow);

    },[fortress, selectedWeapon, setShowTowers]);

    return (
        <div className="block text-center w-auto bg-black/30 p-5 rounded">
            <div className="flex justify-center m-5 items-center border p-2 text-center">
                <h1>select a weapon type: </h1>
                <select 
                className="bg-gray-500 ml-2 text-center items"
                value={selectedWeapon} 
                onChange={(e) => setSelectedWeapon(e.target.value)}>
                {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
                ))}
                </select>
            </div>
        </div>
      );
}
 
export default DropDownByWeapon;