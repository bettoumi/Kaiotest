 //function for slider auto
 var   k=0;
var img=document.getElementById('image');
 var images=["imgcrousel1.png","Activite.png", "groupe.png"]
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
	 