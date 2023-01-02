let answer = document.getElementById("answer");
let img = document.getElementById("img");


for(let a in arr){

   answer.innerHTML += arr[a].auto + " " + "<br>" ;

}


let input = () => {
    let inp =  document.getElementById("inp").value

    


            if(inp == "dodge" || inp == "DODGE" || inp == "DOD" || inp == "dod"){

                let find = arr.find(item =>{

                    if( item.auto === "dodge"){
    
                        return true
    
                    }
    
               })
               answer.innerHTML = "The company was founded in 1900 by the Dodge brothers to produce"+ 
               "automotive components. In 1914, the production of their own cars began.";
               img.style.width = "200px";
               img.style.height = "100px";
               img.src = "https://kolesa-uploads.ru/-/438dc0e5-614f-4755-8d67-2d85b2a970e8/dodge-durango-srt-hellcat-4.jpg";


            }
           
       else if(inp == "nissan" || inp == "NISSAN" || inp == "NIS" || inp == "nis"){

             find = arr.find(item =>{

            if( item.auto === "nissan"){

                return true

            }

       })
       answer.innerHTML = "The founding date of the corporation is December 26, 1933, when, as a result of the merger of"+
       "Tobata imono and Nihon Sangyo, a new company was created, which since June 1, 1934 has been called Nissan Motor.";
       img.style.width = "200px";
        img.style.height = "100px";
        img.src = "https://w-dog.ru/wallpapers/1/8/342848603476494/nissan-gtr-r35-belyj-vecher-stop-signaly.jpg";


       }

       else if(inp == "shevrolet" || inp == "SHEVROLET" || inp == "shev" || inp == "SHEV"){

        find = arr.find(item =>{

       if( item.auto === "shevrolet"){

           return true

       }

  })
        answer.innerHTML = "The company was founded on November 3, 1911 by William Durant, who also founded General Motors in 1908,"+ 
        "with renowned racing driver and automotive engineer Louis Chevrolet and investors William Little and Edwin Campbell.";
        img.style.width = "200px";
        img.style.height = "100px";
        img.src = "https://img4.goodfon.ru/wallpaper/nbig/0/37/chevrolet-camaro-ss-tuning-1.jpg";


  }

  else if(inp == "bmw" || inp == "BMW"){

    find = arr.find(item =>{

   if( item.auto === "bmw"){

       return true

   }

})
        answer.innerHTML = "The history of BMW began in the Bavarian Munich, where in 1913 the German industrialists Rapp and Otto opened two small enterprises.";
        img.style.width = "200px";
        img.style.height = "100px";
        img.src = "https://damion.club/uploads/posts/2022-09/1663827198_2-damion-club-p-bmv-na-oboi-vkontakte-2.jpg";


}

else if(inp == "mercedes" || inp == "MERCEDES" || inp == "merc" || inp == "MERC"){

    find = arr.find(item =>{

   if( item.auto === "mercedes"){

       return true

   }

})
        answer.innerHTML = "The event that marked the beginning of the history of not only the German brand, but the entire global"+
        "automotive industry, occurred on January 29, 1886. It was on this day that a German engineer and innovator named Benz received"+ 
        "patent No. 37435 for his creation - the world's first car with a gasoline engine.";
        img.style.width = "200px";
        img.style.height = "100px";
        img.src = "https://images.wallpaperscraft.ru/image/single/mercedes_benz_s_63_amg_coupe_au_spec_c217_2015_101586_1280x720.jpg";


}

    

}