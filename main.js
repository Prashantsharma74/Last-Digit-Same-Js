const form=document.querySelector("form")
const first=document.getElementById("first")
const second=document.getElementById("second")
const third=document.getElementById("third")
const p=document.querySelector("p")

function checkNum(e){
    e.preventDefault()
    let num1=first.value;
    let num2=second.value;
    let num3=third.value;

    const ans1=num1 % 10;
    const ans2=num2 % 10;
    const ans3=num3 % 10;

    if(ans1==ans2 && ans1==ans3){
    p.innerText= `${num1}, ${num2} and ${num3} have the same last digit.`
    }
    else {
        p.innerText= `${num1}, ${num2} and ${num3} not having same last digit.`
    }
}

form.addEventListener("submit" , checkNum)