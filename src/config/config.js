
import data from "./info.json";

export function getJson(key){
  
    try { 
        console.log("DATA FOR " + key + " " +data[key])
        // console.log("DATA FOR " + key + " " + JSON.stringify(data[key]))
    } catch (error) {
        console.log(error);
    }
  return data[key];
}

export function getStringyJson(key) {
    return JSON.stringify(data[key]);
}
