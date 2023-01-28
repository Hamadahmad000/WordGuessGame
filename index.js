//                    All Values

let frontscreen = document.getElementById('frontscreen')
let actualgame = document.getElementById('actualgame')
let easymode = document.getElementById('easymode')
let hardmode = document.getElementById('hardmode')

let newgame = document.getElementById('newgame')
let guessedshow = document.getElementById('guessedshow')



//      input value 




const onload =()=>{
actualgame.style.display ='none'
}

//             Easy Mode 

easymode.addEventListener('click',()=>{
    actualgame.style.display ='block'
    frontscreen.style.display = 'none'
    easy = 10
    newgame.style.display = 'none'
})


//             Hard Mode 


hardmode.addEventListener('click',()=>{
    actualgame.style.display ='block'
    frontscreen.style.display = 'none'
    hard = 5
    newgame.style.display = 'none'
})


//        Autonumber generator 

let num;
const autonumber =() =>{
   num = Math.floor(Math.random()*100)
    console.log(num)
}

//        check result function 






const checkres = () =>{

//        Number Matching funtion 
let input = document.getElementById('input').value
console.log(input)
if(input > num){
    console.log('Higher')
    guessedshow.innerText = `Your Guess Is Higher Then Actual number 🥺`
}else if(input < num){
    guessedshow.innerText = 'Your Guess Is Lower Then Actual number 😞'
    
    console.log('lower')
}else{
    guessedshow.innerText = 'Corrects 😍'
    console.log('correct')
}

}




//        Input Value Onchange Function

const inputchange = ((cval,i)=>{
    // let arr = [cval]
    console.log(cval)
    // console.log(cval.target.value)
}) 
