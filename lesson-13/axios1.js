import axios from 'axios';


const base_url = 'https://api.restful-api.dev/objects';

// 1. GET ALL OBJECTS
async function getAllObj() {
    const response = await axios.get(base_url);
    console.log('All objects:', response.data);
    
}
// 2. GET object by ID
async function getObjId(id) {
    const response = await axios.get(`${base_url}/${id}`);
    console.log(`Object ${id}:`, response.data);
    
}

//3. POST new object
async function postNewObj() {
    const newObject = {
        name: "Samsung Galaxy PiPipi",
        data: { 
            color: "Strange", 
            price: 999}
        };
    
    const response = await axios.post(base_url, newObject);
    console.log(`Created Object:`, response.data);
    return response.data.id;
    }


//PUT new data
async function updateObj(id) {
    const updateData = {
        name: "Updated object",
        data: {
            key1: "New value",
            key2: "New value2"
        }
    };

    const response = await axios.put(`${base_url}/${id}`, updateData);
    console.log(`Updated object ${id}:`, response.data);
}

//DELETE object
async function deleteObj(id) {
    const response = await axios.delete(`${base_url}/${id}`);
    console.log(`Deleted object ${id}`, response.status);
}


async function allRequests() {
    await getAllObj();
    
    const newId = await postNewObj();
    await getObjId(newId);
    
    await updateObj(newId);
    await deleteObj(newId);
}



allRequests();