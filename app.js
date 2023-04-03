'use strict'
async function logJSONData() {
    const response = await fetch("https://github.com/rasu1ova/JSon/blob/main/db.json");
    const jsonData = await response.json();
    console.log(data);
}
logJSONData()