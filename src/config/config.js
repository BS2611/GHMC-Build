
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

export function getJsonObject(key){
    return JSON.parse(getStringyJson(key));
}
export function getStringyNestedJson(key,nestedKey) {
   data[key].map((result) =>{
     return result[nestedKey]
   });

}

export function getLightBg(input){
    let bg = null;
    if(input%2 ==0){
        bg ="bg-light";
    }else{
        bg ="";
    }
    return bg;
}

export function getDarkBg(input) {
    let bg = null;
    if (input % 2 == 0) {
        bg = "bg-dark-2";
    } else {
        bg = "bg-dark-1";
    }
    return bg;
}