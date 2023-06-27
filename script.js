const decrementValue = document.getElementById("Decrement-button");
const incrementValue = document.getElementById("Increment-button");
const resetValue = document.getElementById("Reset-button");
const displayValue = document.getElementById("displayValue");

// For decrement button click

decrementValue.addEventListener("click", () =>{
    const value = Number(displayValue.innerText);
    if(value > 0 ){
        displayValue.innerText = value - 1;
    }
    else{
        alert("Negative value not allowed!")
    }
});

// for increment button click

incrementValue.addEventListener("click", () =>{
    const value = Number(displayValue.innerText);
    if(value >= 10){
        alert("10+ values not allowed")
    }else{
    displayValue.innerText = value + 1;
    }
});

// for reset button click

resetValue.addEventListener("click", () => {
    displayValue.innerText = 0;
})
