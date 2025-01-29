import towerImage from "../public/tower.jpg"

function App() {
  

  return (

    <div className="grid grid-cols-2 ">
      {/* COL 1*/}
      <div className='grid grid-rows-12 mx-auto'>

        {/* TITLE*/}
        <div className="row-span-1 flex justify-between bg-red-500 h-full text-xs justify-center">
          <h1 className="text-xs">Citadel of Eternal Night</h1>
        </div>

        {/* IMAGE*/}
        <div className="row-span-6 bg-gray-500 h-full m-4">
          <img src={towerImage} className=""/>
        </div>

        {/* DROPDOWN BY WEAPON*/}
        <div className="row-span-1 h-full m-4">
          <p className="text-center">dropdown by weapon</p>
        </div>

        {/* TOWERS CARDS*/}
        <div className="row-span-3 h-full m-4">
          <p className="text-center">CARDS</p>
        </div>

      </div>
        
          
      {/* COL 2*/}
      <div className="bg-blue-500">
          <p className="m-5 text-center">SHOW VILLAGER PROFESSION AND WORKERS</p>
      </div>
  </div>
  )
}

export default App
