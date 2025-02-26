import fs from 'fs';
import { faker } from '@faker-js/faker';
let branch_id = 0; 
let unit_id = 0;
let installation_id = 0;
//const branches = ["USMC", "Army", "Navy", "Air Force", "Space Force"];
const locations = [[32.370377, -102.523255],
[36.895911, -76.208521],
[39.4, -123.81667],
[33.387723, -117.444758],
[31.134891, -97.775614],
[36.657253, -87.458858],
[37.936208, -99.254501],
[32.392337, -84.931457],
[39.4, -123.81667],
[38.737494, -104.788862],
[44.032457, -75.754468],
[32.881267, -83.302945],
[37.899466, -85.952833],
[40.848745, -73.974032],
[37.767687, -92.111975],
[39.113738, -96.837821],
[31.870154, -81.631076],
[31.810651, -106.404743],
[31.559131, -110.318682],
[35.262453, -116.696561],
[41.320273, -79.926847],
[31.327347, -85.737811],
[34.663978, -98.437482],
[30.425956, -87.200935],
[33.757245, -117.750414],
[42.309272, -87.85427],
[32.259774, -90.091589],
[45.409279, -68.666598],
[44.264111, -70.498513],
[45.409279, -68.666598],
[30.422926, -86.698525],
[41.262939, -78.529883],
[41.262939, -78.529883],
[41.262939, -78.529883],
[41.262939, -78.529883],
[41.262939, -78.529883],
[32.383871, -106.493675],
[36.700132, -83.772324],
[41.262939, -78.529883],
[39.108147, -76.743232],
[33.621135, -88.609136],
[40.2184, -79.48782],
[40.2184, -79.48782],
[41.262939, -78.529883],
[29.43746, -97.52888],
[41.262939, -78.529883]];
const clearances = ['Top Secret', 'Secret', 'Confidential']
//const dod_units = require('./03_unit.js');
//let unitCount = dod_units.length 
const ranks = [
    "Private", 
    "Private First Class", 
    "Lance Corporal", 
    "Corporal",
    "Sergeant",
    "Staff Sergeant",
    "Sergeant First Class",
    "Master Sergeant",
    "First Sergeant",
    "Sergeant Major",
    "Second Lieutenant",
    "First Lieutenant",
    "Captain",
    "Major",
    "Lieutenant Colonel",
    "Colonel",
    "Seaman Recruit",
    "Seaman Apprentice",
    "Seaman",
    "Petty Officer Third Class",
    "Petty Officer Second Class",
    "Petty Officer First Class",
    "Chief Petty Officer",
    "Senior Chief Petty Officer",
    "Master Chief Petty Officer",
    "Ensign",
    "Lieutenant Junior Grade",
    "Lieutenant",
    "Lieutenant Commander",
    "Commander",
    "Captain",
    "Specialist",
    "Airman Basic",
    "Airman",
    "Airman First Class",
    "Senior Airman",
    "Staff Sergeant",
    "Technical Sergeant",
    "Master Sergeant",
    "First Sergeant",
    "Senior Master Sergeant",
    "First Sergeant",
    "Chief Master Sergeant",
    "Command Chief Master Sergeant",
    "Second Lieutenant",
    "First Lieutenant",
    "Captain",
    "Major",
    "Lieutenant Colonel",
    "Colonel"
  
];
  
let personnel = [];

for (let i = 0; i < 100; i++) {
  installation_id  = Math.floor(Math.random() * locations.length)+1
  unit_id = Math.floor(Math.random() * 13) + 1
  branch_id = Math.floor(Math.random() * 5) + 1
  let coord = locations[installation_id -1];
  let lat = coord[0] + Math.random() / 1000 - 0.0005;
  let lon = coord[1] + Math.random() / 1000 - 0.0005;
  let location = [parseFloat(lat.toFixed(3)), parseFloat(lon.toFixed(3))]
  let isCivilian = faker.datatype.boolean();

    personnel.push({
        id: i + 1,
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        clearance: faker.helpers.arrayElement(clearances),
        has_skill_identifier: faker.datatype.boolean(),
        arrived_on_station: faker.date.past().toISOString().split('T')[0],
        is_civilian: faker.datatype.boolean(),
        rank: faker.helpers.arrayElement(ranks),
        email: faker.internet.email(),
        geocode: location,
        branch_id: ` ${branch_id}`, 
        unit_id:` ${unit_id}`, 
        installation_id: `${installation_id}`,
        photo: faker.image.avatar(),
    });
}

fs.writeFile('../server/data/personnel.json', JSON.stringify(personnel, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

