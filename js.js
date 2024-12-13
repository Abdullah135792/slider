let ss=document.getElementById('ss')
let s=document.getElementById('s')
let u=document.getElementById('u')
u.innerHTML=`<img src="2.jpg" alt="" srcset="">`
let h=0;
s.addEventListener('click',function(){
  
  if (h>1) {
    
    h--;
  }
 
  

  
  
  switch (h) {

      case 1:
        u.innerHTML=`<img src="${h}.jpg" alt="" srcset="">`
        
        break;
        case 2:
          
          u.innerHTML=`<img src="${h}.jpg" alt="" srcset="">`
        break;
        case 3:
          
        u.innerHTML=`<img src="${h}.jpg" alt="" srcset="">`
      break;
        case 4:
          
        u.innerHTML=`<img src="${h}.jpg" alt="" srcset="">`
      break;
        case 5:
          
        u.innerHTML=`<img src="${h}.jpg" alt="" srcset="">`
      break;
        
        default:
      console.log(0)
      break;
  }
})



ss.addEventListener('click',function(){
  
  if (h<5) {
    
    h++;
  }
  console.log(h)
  
  switch (h) {

    case 1:
    
      u.innerHTML=`<img src="${h}.jpg" alt="" srcset="">`
      
      break;
      case 2:
  
        u.innerHTML=`<img src="${h}.jpg" alt="" srcset="">`
      
      break;
      case 3:
          
      u.innerHTML=`<img src="${h}.jpg" alt="" srcset="">`
    break;
      case 4:
          
      u.innerHTML=`<img src="${h}.jpg" alt="" srcset="">`
    break;
      case 5:
          
      u.innerHTML=`<img src="${h}.jpg" alt="" srcset="">`
    break;
      
      default:
    console.log(0)
    break;
}
  })
  
