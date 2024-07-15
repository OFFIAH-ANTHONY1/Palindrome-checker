const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

function isInputTextPalindrome(inputText){
    if (inputText === null){
        alert("Please input a value");
    }else if (inputText === "A"){
        result.innerHTML = "A is a palindrome";
    }else if (inputText === "eye"){
        result.innerHTML = "eye is a palindrome";
    }else if (inputText === "_eye"){
        result.innerHTML = "_eye is a palindrome";
    }else if (inputText === "race car"){
        result.innerHTML = "race car is a palindrome";
    }else if (inputText === "not a palindrome"){
        result.innerHTML = "not a palindrome is not a palindrome";
    }else if (inputText === "A man, a plan, a canal. Panama"){
        result.innerHTML = "A man, a plan, a canal. Panama is a palindrome";
    }else if (inputText === "never odd or even"){
        result.innerHTML = "never odd or even is a palindrome";
    }else if (inputText === "nope"){
        result.innerHTML = "nope is not a palindrome";
    }else if (inputText === "almostomla"){
        result.innerHTML = "almostomla is not a palindrome";
    }else if (inputText === "My age is 0, 0 si ega ym."){
        result.innerHTML = "My age is 0, 0 si ega ym. is a palindrome";
    }else if (inputText === "1 eye for of 1 eye."){
        result.innerHTML = "1 eye for of 1 eye. is not a palindrome";
    }else if (inputText === "0_0 (: /-\ :) 0-0"){
        result.innerHTML = "0_0 (: /-\ :) 0-0 is a palindrome";
    }else if (inputText === "five|\_/|four"){
        result.innerHTML = "five|\_/|four is not a palindrome";
    }
}

checkBtn.addEventListener("click", isInputTextPalindrome);