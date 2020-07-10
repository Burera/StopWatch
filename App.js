console.log("Stop | Watch");

var sec = 0;
var min = 0;
var msec = 0;
 
var sec_content = document.getElementById("sec");
var msec_content = document.getElementById("msec");
var min_content = document.getElementById("min");
var interval;

function startSW()
{
  $("#pausebtn").removeAttr('disabled');
  $("#resetbtn").removeAttr('disabled');
  $("#startbtn").attr({'disabled' : 'disabled'})

  interval = setInterval(function()
  {
      msec++;
      msec_content.innerHTML= msec;
      if(msec >= 100)
      {
        msec=0;
        sec++;
        sec_content.innerHTML=sec;
      }
      else if(sec >= 60)
      {
         min++;
         sec=0;
         min_content.innerHTML=min;
      }
  } ,10)

}
function pause()
{
    $("#startbtn").removeAttr('disabled');
  
    $("#pausebtn").attr({'disabled' : 'disabled'})

    clearInterval(interval)
}
function reset()
{
    $("#startbtn").removeAttr('disabled');
    $("#pausebtn").attr({'disabled':'disabled'});
    $("#resetbtn").attr({'disabled':'disabled'});
     sec = 0;
    min = 0;
     msec = 0
     msec_content.innerHTML= msec;
     sec_content.innerHTML= sec;
     min_content.innerHTML= min;
     pause();
}
