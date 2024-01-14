
import data from "./info.json";

export function getJson(key){
  
    try {
        //const jsonString = fs.readFileSync('./src/config/settings.json');
         //data = JSON.parse(jsonString);
        
        console.log(data)
        console.log(data[key])
    } catch (error) {
        console.log(error);
    }
  return data[key];
}

