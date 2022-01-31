const container = document.querySelector(".data-container");
//var bubble = document.querySelector(".bubble");
// function to generate bars
let arr = [];
function generatebars(num = 20) {
    for (let i = 0; i < num; i += 1) {
        
        //random values from 1 to 100
        const value = Math.floor(Math.random() * 125) + 1;
        arr.push(value);
        const bar = document.createElement("div");
        //class "bar" to "div"
        bar.classList.add("bar");
        //height of the bar
        bar.style.height = `${value * 3}px`;
        //bar towards positive X axis
        bar.style.transform = `translateX(${i * 30}px)`;

        container.appendChild(bar);
    }
}


// Call "generatebars" function
generatebars();

// new random array 
function generate() {
    window.location.reload();
}
