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


async function insertion_sort(delay2 = 250){
  var i,key,j;
  var no_of_bar=20;
  var special=document.querySelectorAll(".bar");
  for(i=1;i<no_of_bar;i++)
  {
    key=arr[i];
    special[i].style.background="grey";
    await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay2)
     );
    j=i-1;
    while(j>=0 && arr[j]>key){
      special[j].style.background="rgba(213, 67, 26, 0.98)";
      if(j+1!=i) special[j+1].style.background="rgba(213, 67, 26, 0.98)s";

      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay2)
       );
      await swap(special[j+1],special[j]);
      special=document.querySelectorAll(".bar");
      arr[j+1]=arr[j];
      special[j].style.background= " rgba(140, 61, 102, 0.8)";
      if(j+1!=i)
      special[j+1].style.background= " rgba(140, 61, 102, 0.8)";
        clickPlay();
      j--;
    }
    arr[j+1]=key;
    await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay2)
     );

  }
  var inc=0.1;
  for(var i=no_of_bar-1;i>=0;i--)
  { 
    special[i].style.background="rgb(76, 145, 149)";
    await new Promise(resolve =>
    setTimeout(() => {
        resolve();
      }, delay2+=(inc-50))
    );
  }
   endPlay();
}

