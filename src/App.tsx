import { useState } from "react"
import towerImage from "../public/tower.jpg"
import DropDownByWeapon from "./components/DropDownByWeapon"
import { megaEpicFortress } from "./data/data"
import VillagersToShow from "./components/ListVillagers";
import TowerCard from "./components/TowerCard";

function App() {
  
  const [showTowers, setShowTowers] = useState();
  const [showVillagers, setShowVillagers] = useState<boolean>(false);

  const onClick = ()=> {
    if(showVillagers) {setShowVillagers(false);}
    else {setShowVillagers(true)} 
  }

  return (

    <div className="grid grid-cols-2 ">
      {/* COL 1*/}
      <div className='grid grid-rows-4 mx-auto h-full'>

        {/* TITLE*/}
        <div className="row-span-1 text-xs justify-center text-center">
          <h1 className="text-xs">Citadel of Eternal Night</h1>
        </div>

        {/* IMAGE*/}
        <div className="row-span-2 m-4">
          <img src={towerImage} className=""/>
        </div>

        {/* DROPDOWN BY WEAPON*/}
        <div className="row-span-1 m-4">
          <DropDownByWeapon
            fortress= {megaEpicFortress}
            setShowTowers={setShowTowers}
          />
        </div>

        {/* TOWERS CARDS*/}
        <div className="row-span-2 m-4">
          <TowerCard 
            towersToShow={showTowers}
          />
        </div>

      </div>
        
          
      {/* COL 2*/}
      <div className="">
          <button className="m-5 text-center flex justify-center text-center items-center border" onClick={() =>{onClick()}}>SHOW VILLAGER PROFESSION AND WORKERS</button>
          {showVillagers &&  (
          <VillagersToShow
            tower={megaEpicFortress}
          />
          )}
      </div>
  </div>
  )
}

export default App
