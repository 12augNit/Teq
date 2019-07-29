// function search(){
    
//     $(".input").toggleClass("active").focus;
//     $(".btn").toggleClass("animate");
//     $(".input").val("");
//   };

function search()
{   
    // document.getElementById('srch').style.display='block';
    document.getElementById('srch').style.width='165px';
    document.getElementById('srch').style.height='30px';
    document.getElementById('btns').style.transform='rotate(360deg)';
    document.getElementById('srch').style.padding='5px';
    document.getElementById('srch').style.transition='all 1s ease';
    document.getElementById('srch').style.right='0px';
    document.getElementById('btns').style.right='0px';
    document.getElementsById('btns').style.transition='all 1s ease';
}

function show(){
	document.querySelector('.bg-modal').style.display = "flex";
    document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
})};


function openSlideMenu(){
    document.getElementById('side-menu').style.width = "250px";
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('main').style.opacity = 0.8;
  }

  function closeSlideMenu(){
    document.getElementById('side-menu').style.width = "0";
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('main').style.opacity = 1;
  }

document.addEventListener('mouseup', (e) =>
{   e.stopPropagation();
    if(event.target.closest('.modal-contents') || event.target.closest('.side-bar')){
      return;
    } else {
      document.getElementsByClassName('bg-modal')[0].style.display ="none";
      document.getElementsByClassName('side-nav')[0].style.width ='0';
    }
    
})
let count = 0;
let pcount=0;
function nextslide()
{
    count++;
    let v = 100*count;
    document.getElementById('slider').style.transition='2s';
    document.getElementById('slider').style.transform=`translate(-${v}%,0)`;
    pcount--;
}

function prevslide()
{   
    pcount++;
    let v = 100*pcount;
    document.getElementById('slider').style.transform=`translate(${v}%,0)`;
    document.getElementById('slider').style.transition='2s';
   count--;
}
