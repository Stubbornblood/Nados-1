//Empty Object
//Key Value pair

let obj = {};
console.log(obj);

//Key : Value in object 

let objKrishna = {
    "Name":"Krishna",
    "Age" : '22',
    PhoneNo : 88888888,
    "LastName" : 'Singh'
}


//Captain-America

let capAmerica = {

    Name: "Steve",
    Age : 9999,
    Friends : ['Natasha','Tony','Bucky','Hulk'],
    address : {
        city : "Queens",
        state : "Haryana"
    },
    sayHi:function(){
        console.log("Cap AMerica say hii");
    },
    SayBy:function(a, b){
        c = a+b;
        return c;
    }

}


    
console.log(capAmerica);
//Name of Captain-America
console.log(capAmerica.Name);
//Captain-America age
console.log(capAmerica.Age);
//captian-America address
console.log(capAmerica.address);
//captain-America address city
console.log(capAmerica.address.city);
//captain-America function saying Hi
capAmerica.sayHi();
//captain america friends
console.log(capAmerica.Friends);
//Function calling
console.log(capAmerica.SayBy(10,20));
//to add Value
capAmerica.Age = 100;
console.log(capAmerica);
//to delete
delete capAmerica.Age;
console.log(capAmerica)
//add a new ky to object
capAmerica.Movies = ['Avengers','civil War','Endgame'];
console.log(capAmerica);


//Another way to access a key
console.log(capAmerica ['Friends'][0]);
capAmerica['sayHi']();





