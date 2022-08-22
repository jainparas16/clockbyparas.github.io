setInterval( () => {
    d = new Date();
    htime= d.getHours();
    hminut= d.getMinutes();
    hsecond= d.getSeconds();
    hrotions=30*htime+hminut/2;
    mrotions=6*hminut;
    srotions=6*hsecond;

    hours.style.transform=`rotate(${hrotions}deg)`;
    minut.style.transform=`rotate(${mrotions}deg)`;
    second.style.transform=`rotate(${srotions}deg)`;
},1000);







