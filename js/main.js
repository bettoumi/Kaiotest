 //function for slider auto
 var   k=0;
var img=document.getElementById('image');
 var images=["imgcrousel1.png","imgcrousel2.png", "imgcrousel3.png"]
 function play()

{
	    if(k<images.length)
        {
        
          console.log(k);
         img.innerHTML="<img src=img/"+images[k]+">";
         k++; 

 
      }
       else { k=0;}


     
	    
	   
	    	
	    
	}

  setInterval(play, 1500); 



	var nav_buton = document.getElementById('nav_button');
  console.log(nav_buton);
  nav_buton.onclick = function(){ 

    var navlinkmobile = document.getElementById("nav-link");
     if(navlinkmobile.classList.contains("nav-linkmobile"))
     {
         navlinkmobile.classList.replace("nav-linkmobile", "navmobile"); 
     }
     else { navlinkmobile.classList.replace("navmobile", "nav-linkmobile"); }

   };
  