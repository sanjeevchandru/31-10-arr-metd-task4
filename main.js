document.write("4. define a function that calculates the area of a circle."+"<br>"+" Using map (Refer Math.floor for rounding values) "+"<br>");
document.write("-------------------------------------------------------"+"<br>");

let arr=[10,30,50];
let arra=[];
let x=arr.map(function(value,index,array){
    if(index==0){
        area=3.14*value*value;
        // document.write(area);
        arra.push(area);
    }
});

let y=arr.map(function(value,index,array){
    if(index==1){
        area=3.14*value*value;
        // document.write(area);
        arra.push(area);
    }
    
});


let z=arr.map(function(value,index,array){
    if(index==2){
        area=Math.floor(3.14*value*value);
        // document.write(area);
        arra.push(area);
    }
});
document.write(arra);
console.log(arra);
