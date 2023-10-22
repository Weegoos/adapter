console.log("---- Adapter ----");
let setTemp = localStorage.getItem('setTemp')
let setTempParse = JSON.parse(setTemp)

class TempClient{
    constructor(temp){
        this.temp = temp
    }

   getCelsius(){
    console.log(this.temp);
   }
   getKelvin(){
    console.log(this.temp + 273);
   }
}

class TempAdapter extends TempClient{
    constructor(adaptee){
        super()
        this.adaptee = adaptee
    }

    getCelsius(){
        const celcius = this.adaptee.data()
        return celcius.temp 
    
    }

    getKelvin(){
        const kelvin = this.adaptee.data()
        return kelvin.temp + 273
    }
}

class MainService {

    data(){
        return {
            temp: setTempParse,
        }
    }
}