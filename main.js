let input_temp = document.querySelector('.input_temp')
let start = document.querySelector('.start')

start.onclick = function (){
    localStorage.setItem('setTemp', +input_temp.value)
    location.reload()
}

try{
    const newService = new MainService()
    const adapter = new TempAdapter(newService)

    console.log("Celcius: " + adapter.getCelsius() + "C");
    console.log("Kelvin: " + adapter.getKelvin() + "K");
}

catch(e){
    if (e instanceof TypeError){
        console.log("TypeError");
    }

    if (e instanceof SyntaxError){
        console.log("SyntaxError");
    }

    if (e instanceof EvalError){
        console.log("EvalError");
    }
}

