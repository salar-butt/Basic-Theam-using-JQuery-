var bclick=$('#click')
$(document).ready(()=>{
    bclick.click(function(){
$('#main2').toggle()
var data=$(bclick).text() 
// console.log(data,"test");
if(data=='Click')
{
    bclick.text('Back')
    bclick.css({height:'14vh',width:'7vw'})
}
else if(data=='Back')
{
    bclick.text('Click')
    bclick.css({height:'12vh',width:'6vw'})

}
   });


    var button1=$('.btn1')
    var button2=$('.btn2')
    button1.click(function(){
        // console.log("here")
        $('#div5').hide()

    })
    button2.click(function(){
        $('#div5').show()
    })



    var slides=document.querySelectorAll('.pics')
var counter=0;
slides.forEach((slide,index)=>{
slide.style.left=`${index*100}%`
})
$('.prev').click(function(){
    counter--
    slideImage()
})
$('.next').click(function(){
    if(counter>=3){
        counter=0
        slideImage()
        console.log(counter)
    }
    else{
    counter++
    slideImage()
    }
})
var slideImage=()=>{
    slides.forEach((slide)=>{
slide.style.transform=`translateX(-${counter*100}%)`
    })
}



})