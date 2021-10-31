/*
let count = 0
console.log(count)

count=12
let val=count
console.log(val)

let ans=count+10
console.log(ans)*/

/*
let humanyear=20
let dogyear=7
let ans=humanyear*dogyear
console.log(ans)*/
/*
let count =20
count=count+1
count=count+1
count=count+1
console.log(count)*/

/*
let bonuspoint =50
bonuspoint=bonuspoint+50
bonuspoint=bonuspoint-75
bonuspoint=bonuspoint+45
console.log(bonuspoint)
*/
/*
function increment() {
    console.log("the button was clicked")
}
increment()
*/
/*
let inc=0

function incr(){
    inc=inc+1
}

incr()
incr()
incr()
console.log(inc)*/
/*
let a="logesh"
console.log(a)*/

let welcomeEl = document.getElementById("wel")
let name="logesh"
let greets="welcome back "
welcomeEl.innerText=greets + name


//document.getElementById("count-el").innerText=11

let countEL = document.getElementById("count-el")
let saveEl  = document.getElementById("save-el")
let count =0
console.log(countEL)
function increment()
{
    count=count+1
    countEL.innerText = count
}

function save()
{
    let countstr=count + " - "
    saveEl.textContent+=countstr 
    
}