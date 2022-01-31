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

function change(el1,el2){
      const style2 = window.getComputedStyle(el2);
      const transform2 = style2.getPropertyValue("height");
      el1.style.height = transform2;
}

async function merge_arr(low,mid,high,delay2=250){
  var no_of_bar=20;
  var i=low,j=mid+1,temp,tempi,tempj;

  var special = document.querySelectorAll(".bar");
  while(i<=mid && j<=high)
  {
    special = document.querySelectorAll(".bar");
    tempi=i,tempj=j;
    special[tempi].style.background="rgba(213, 67, 26, 0.98)";
    if(tempj<20) special[tempj].style.background="rgba(213, 67, 26, 0.98)";
    await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay2)
     );
    if(arr[i]>arr[j])
     {
       temp=arr[j];
       temp_special=special[j];
       const style2 = window.getComputedStyle(special[j]);
       const transform2 = style2.getPropertyValue("height");
       for(var k=j;k>i;k--)
       {
         await change(special[k],special[k-1]);
         arr[k]=arr[k-1];
        //  special = document.querySelectorAll(".bar");
       }
      special[i].style.height=transform2;
      
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay2)
       );

       special = document.querySelectorAll(".bar");
       arr[i]=temp;
       j++;
       mid++;
     }
     if(tempj<20) special[tempj].style.background= "rgb(255, 174, 0)";
     special[tempi].style.background= "rgb(255, 174, 0)";
     clickPlay();
     if(low==0 && high==no_of_bar-1) special[i].style.background="green";
     i++;
  }

  console.log(i+"  "+j);
  if(low==0&&high==20)
   {
     for(var k=0;k<20;k++)
      special[k].style.background="rgb(76, 145, 149)";
      endPlay();
   }
}

async function merge_sort(low=0,high=20,delay2=300)
{
   if(low<high)
   {
     var mid = Math.floor(low+(high-low)/2);
      // console.log(low+" "+mid+" "+high);
      await merge_sort(low,mid);
      await merge_sort(mid+1,high);
      await merge_arr(low,mid,high);   
   }
}

// var special = document.querySelectorAll(".bar");
//   var inc=0.1;
//   for(var i=19;i>=0;i--)
//   { 
//     special[i].style.background="green";
//     await new Promise(resolve =>
//     setTimeout(() => {
//         resolve();
//       }, delay2+=(inc-50))
//     );
//   }




