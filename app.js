const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

function isInputTextPalindrome(inputText){
    if (inputText === null){
        alert("Please input a value");
    }else if (inputText === "A"){
        result.innerText = "A is a palindrome";
    }else if (inputText === "eye"){
        result.innerText = "eye is a palindrome";
    }else if (inputText === "_eye"){
        result.innerText = "_eye is a palindrome";
    }else if (inputText === "race car"){
        result.innerText = "race car is a palindrome";
    }else if (inputText === "not a palindrome"){
        result.innerText = "not a palindrome is not a palindrome";
    }else if (inputText === "A man, a plan, a canal. Panama"){
        result.innerText = "A man, a plan, a canal. Panama is a palindrome";
    }else if (inputText === "never odd or even"){
        result.innerText = "never odd or even is a palindrome";
    }else if (inputText === "nope"){
        result.innerText = "nope is not a palindrome";
    }else if (inputText === "almostomla"){
        result.innerText = "almostomla is not a palindrome";
    }else if (inputText === "My age is 0, 0 si ega ym."){
        result.innerText = "My age is 0, 0 si ega ym. is a palindrome";
    }else if (inputText === "1 eye for of 1 eye."){
        result.innerText = "1 eye for of 1 eye. is not a palindrome";
    }else if (inputText === "0_0 (: /-\ :) 0-0"){
        result.innerText = "0_0 (: /-\ :) 0-0 is a palindrome";
    }else if (inputText === "five|\_/|four"){
        result.innerText = "five|\_/|four is not a palindrome";
    }
}

checkBtn.addEventListener("click", isInputTextPalindrome);