const countdown = () =>{
    const endTime= new Date("November 15, 2022 18:00:00").getTime();
    const timeNow= new Date().getTime();

    const timer= endTime-timeNow;

    const sec=1000;
    const min= sec * 60;
    const hour= min*60;
    const day=hour*24;

    const days= Math.floor(timer/day);
    const hours=Math.floor((timer%day) / hour);
    const minutes= Math.floor((timer%hours)/min);
    const seconds=Math.floor((timer%min)/ sec);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


}

setInterval(countdown, 1000);