function years(year){
    let yearT=year%4
    let yearT2=year%100
    let yearT3=year%400
    if(yearT==0 && yearT2!=0 || yearT3==0){

return "Es un año bisiesto"

    }else return "No es un año bisiesto"
}
console.log(years(2023))