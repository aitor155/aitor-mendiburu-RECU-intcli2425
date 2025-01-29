import { useState } from "react"
import towerImage from "../public/tower.jpg"
import DropDownByWeapon from "./components/DropDownByWeapon"
import { megaEpicFortress } from "./data/data"
import VillagersToShow from "./components/ListVillagers";
import TowerCard from "./components/TowerCard";
import { Towers } from "./types/MegaEpicFortress";


function App() {
  
  const [showTowers, setShowTowers] = useState<Towers[]>();
  const [showVillagers, setShowVillagers] = useState<boolean>(false);

  const onClick = ()=> {
    if(showVillagers) {setShowVillagers(false);}
    else {setShowVillagers(true)} 
  }

  return (

    <div className="grid grid-cols-2 h-screen">
      {/* COL 1*/}
      <div className='flex flex-col space-y-2 p-4'>

        {/* TITLE*/}
        <div className="text-center">
          <h1 className="">Citadel of Eternal Night</h1>
        </div>

        {/* IMAGE*/}
        <div className="w-full">
          <img src={towerImage} className=""/>
        </div>

        {/* DROPDOWN BY WEAPON*/}
        <div className="text-center">
                <label className="text-xs text-gray-600">Select a weapon type</label>
        </div>
        <div className="w-full text-center align-center justify-center item-center">
          <DropDownByWeapon
            fortress= {megaEpicFortress}
            setShowTowers={setShowTowers}
          />
        </div>

        {/* TOWERS CARDS*/}
        <div className="flex-grow overflow-hidden align-center">
          <TowerCard 
            towersToShow={showTowers}
          />
        </div>

      </div>
        
          
      {/* COL 2*/}
      <div className="p-4 flex flex-col">
          <button className="mb-4 px-4 py-2 border rounded hover:bg-gray-100" onClick={() =>{onClick()}}>SHOW VILLAGER PROFESSION AND WORKERS</button>
          <div className="flex-grow overflow-hidden">
          {showVillagers &&  (
          <VillagersToShow
            tower={megaEpicFortress}
          />
          )}
          </div>
      </div>
  </div>
  )
}

export default App
