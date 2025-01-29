export default interface MegaEpicFortress {
    name: string,
    location: LocationInterface,
    defenses: Defenses,
    inhabitants: Inhabitants,
    resources: Resources, 
    history: HistoryInterface,
}

////////////////////////////////////////////

interface LocationInterface {
    continent: string,
    coordinates: Coordinates,
    nearbyLandmarks: NearByLandmarks[],
}

interface Coordinates {
    latitude: number,
    longitude: number
}

interface NearByLandmarks {
    name: string,
    type: string,
    distance: number
}

///////////////////////////////////////////

interface Defenses {
    walls: Walls,
    towers: Towers[],
}

interface Walls {
    material: string,
    height: number,
    enchantments: Enchantments[],
}

interface Towers {
    name: string,
    height: number,
    armament: Armament,
    guards: Guards[], 
}

interface Enchantments {
    name: string,
    level: number
}

interface Armament {
    weaponType: string,
    ammunitionType: string,
    ammunitionCount: number
}

interface Guards {
    name: string,
    rank: string
}

/////////////////////////////////////

interface Inhabitants {
    population: number,
    roles: Roles[],
}

interface Roles {
    role: string,
    count: number,
    equipment?: Equipment,
    professions?: Professions[]
}

///////////////////////
// type RoleObject = Record<>

// type Rolex = Record<[role: string, count: number]: rolesExtra>

/////////////////////////

interface Equipment {
    weapon?: string,
    armor?: string,
    shield?: string,
    staff?: string,
    robe?: string,
    amulet?: string

}

interface Professions {
    type: string,
    count: number
}

// type profession  = Record<string, number>

//////////////////////////////////////////

interface Resources {
    storage: StorageInterface, 
    armory: Armory,
}

interface StorageInterface {
    food: Food,
    water: Water
}

interface Food {
    type: string,
    quantity: number,
    unit: string
}

interface Water {
    source: string,
    capacity: number,
    unit: string
}

interface Armory {
    weapons: Weapons[],
    shields: Shields[]
}

interface Weapons {
    type: string,
    quantity: number
}

interface Shields {
    type: string,
    quantity: number
}

////////////////////////////////////////////

interface HistoryInterface {
    founded: Founded,
    majorEvents: MajorEvents[],
}

interface Founded {
    year: number,
    by: string
}

interface MajorEvents {
    year: number,
    event: string,
    outcome: string
}