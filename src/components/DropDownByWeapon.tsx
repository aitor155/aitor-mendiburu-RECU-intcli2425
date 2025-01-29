import { FunctionComponent, useEffect, useState } from "react";
import { Towers, MegaEpicFortress } from "../types/MegaEpicFortress";
import { getTowersAndGuardsByWeaponType } from "../helpers/helpers";
import { megaEpicFortress } from "../data/data";


interface DropDownProps {
    fortress: MegaEpicFortress,
    setShowTowers: (towerToShow: Towers[]) => void
}

interface Option {
    value: string,
    label: string
}
 
const DropDownByWeapon: FunctionComponent<DropDownProps> = ({fortress, setShowTowers}) => {
    const [selectedWeapon, setSelectedWeapon] = useState<string>("");

    useEffect(()=> {
        const towersToShow = getTowersAndGuardsByWeaponType(fortress, selectedWeapon);
        setShowTowers(towersToShow);

    },[fortress, selectedWeapon, setShowTowers]);


    ////////////FUNCTIONS//////////////////

    const getWeaponOptions = (fortress : MegaEpicFortress) => {
        const options = [{ value: " ", label: " " }]; 
        
        fortress.defenses.towers.forEach((tower) => {
            const weaponType  = tower.armament.weaponType;
            assignNoEqual(weaponType, options);
        });
    
        return options;
    };

    const assignNoEqual = (weaponType: string, options: Option[]) => {
        const exists = options.some((option) => option.value === weaponType);
    
        if (!exists) {
            options.push({ value: weaponType, label: weaponType });
        }
    }

    const options = getWeaponOptions(megaEpicFortress);

    return (
        <div className="flex justify-center items-center rounded text-center">
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