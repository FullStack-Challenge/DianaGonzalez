/*Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).*/

const compare_dates = (date1, date2) => {
    if (date1.getTime() === date2.getTime()){
        return `${date1} y ${date1} son iguales`
    }else if (date1.getTime() < date2.getTime()){
        return `${date1} es menor a ${date1}`
    }else{
        return `${date1} es mayor a ${date1}`
    }
}


console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));



