import { FunctionComponent, useEffect, useState } from "react";
import MegaEpicFortress from "../types/MegaEpicFortress";
import { getTowersAndGuardsByWeaponType } from "../helpers/helpers";

interface Tower {
    name: string,
    guards: string[]
}
interface DropDownProps {
    fortress: MegaEpicFortress,
    setShowTowers: (towerToShow: Tower[]) => void
}

const options = [
    {value: " ", label: " "},
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
        <div className="block text-center p-5 rounded">
            <div className="items-center border text-center">
                <select 
                className=" ml-2 text-center items-center justify-center pr-100 pt-10"
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