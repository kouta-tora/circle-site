const slideshow=["slideshow/img1.jpg","slideshow/img2.jpg","slideshow/img3.jpg","slideshow/img4.jpg"]
let num=-1;

function slideshow_timer() {
    if(num===2){
        num=0;
    }
    else{
        num++;
    }
    document.getElementById("slideshow").src=slideshow[num];
}

setInterval(slideshow_timer,1000);