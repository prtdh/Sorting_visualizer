function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    //  window.setTimeout(function(){
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    // } ,delay);

    el1.style.height = transform2;
    el2.style.height = transform1;
}
function clickPlay(){
    var audioclick=new Audio("click.wav").play();
}
function endPlay(){
    var audioend=new Audio("endsound.wav").play();
}

async function bubble_sort(delay = 100) {
    
    var bar = document.querySelectorAll(".bar");
    var no_of_bar = 20;
    for (var i = 0; i < no_of_bar - 1; i++) {
        for (var j = 0; j < no_of_bar - 1 - i; j++) {
            bar[j].style.background = "rgba(213, 67, 26, 0.98)";
            bar[j + 1].style.background = "rgba(213, 67, 26, 0.98)";
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );
            if (arr[j] > arr[j + 1]) {
                await swap(bar[j], bar[j + 1]);
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                bar = document.querySelectorAll(".bar");
            }


            bar[j].style.background = "rgb(255, 174, 0)";
            bar[j + 1].style.background = "rgb(255, 174, 0)";
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );

        }
        bar[no_of_bar - i - 1].style.background = " rgb(76, 145, 149)";
            clickPlay();
    }
    bar[0].style.background = " rgb(76, 145, 149)";

    endPlay();

}function generate() {
    window.location.reload();
}



