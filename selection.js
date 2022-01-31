function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}
function clickPlay(){
    var audioclick=new Audio("click.wav").play();
}
function endPlay(){
    var audioend=new Audio("endsound.wav").play();
}


async function selection_sort(delay1 = 150, delay2 = 150) {
    var special = document.querySelectorAll(".bar");
    var no_of_bar = 20;


    for (var i = 0; i < no_of_bar; i++) {
        var min_idx = i;
        special[i].style.background = "rgba(213, 67, 26, 0.98)";
        special[min_idx].style.background = "rgba(213, 67, 26, 0.98)";
        for (var j = i + 1; j < no_of_bar; j++) {
            special[j].style.background = "grey";
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, delay1)
            );
            //  special[j].style.background="yellow";
            // special[min_idx].style.background="yellow";
            if (arr[j] < arr[min_idx]) {
                if (min_idx != i)
                    special[min_idx].style.background = "rgb(255, 174, 0)";
                min_idx = j;
                special[min_idx].style.background = "rgba(213, 67, 26, 0.98)";
            }
            if (j != min_idx)
                special[j].style.background = "rgb(255, 174, 0)";
        }
        special[min_idx].style.background = "rgba(213, 67, 26, 0.98)";

        // special[i].style.background="green";
        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, delay2)
        );
        await swap(special[min_idx], special[i]);
        special[min_idx].style.background = "rgb(255, 174, 0)";
        special[i].style.background = "rgb(76, 145, 149)";
        clickPlay();
        var temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
        special = document.querySelectorAll(".bar");
    }
    // console.log(no_of_bar);
    special[no_of_bar - 1].style.background = "rgb(76, 145, 149)";
    endPlay();
    
}

