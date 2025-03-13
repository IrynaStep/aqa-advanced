import axios from 'axios';


async function allRequests() {
    await axios.get('https://api.restful-api.dev/objects');
    await axios.get('https://api.restful-api.dev/objects/2');
    await axios.post('https://api.restful-api.dev/objects', { name: "Samsung Galaxy PiPipi", data: { color: "Strange", price: 999 } });
    await axios.put('https://api.restful-api.dev/objects/2', { name: "Updated" });
    await axios.delete('https://api.restful-api.dev/objects/2');
}



allRequests();