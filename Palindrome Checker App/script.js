const userInput=document.getElementById("text-input");
const checkBtn= document.getElementById("check-btn");
const resultPalindrome= document.getElementById("result");

const checkPalindrome=(input)=>{
  const originalInput = input;
  if(input===''){
    alert("Please input a value");
    return;
  }
  resultPalindrome.replaceChildren();
  const lowerCase= input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMessage= `${originalInput} ${lowerCase===[...lowerCase].reverse().join('')? 'is' : 'is not'} a palindrome`;

  const paraGraph= document.createElement('p');
  paraGraph.innerHTML= resultMessage;
  resultPalindrome.appendChild(paraGraph);
  resultPalindrome.classList.remove('hidden');
}

userInput.addEventListener('keydown', (e)=>{
  if(e.key==="Enter"){
    checkPalindrome(userInput.value);
    userInput.value('');
  }
})

checkBtn.addEventListener("click",()=>{
  checkPalindrome(userInput.value);
  userInput.value('');
})
