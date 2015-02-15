

var globalTime = document.getElementById('time').textContent;
var dayCycle = document.getElementById('emoticon')
setInterval(function() 
            {
              //globalTime = document.getElementById('time').textContent;
              globalTime++;
              if (globalTime%24<12)
                {
                  var dayCycle = document.getElementById('emoticon')

                  document.getElementById('period').textContent = 'AM';
                  
                  if(globalTime%24==0)
                    document.getElementById('time').textContent =12;
                 
                  else
                  document.getElementById('time').textContent =globalTime%24;
                  
                  if (globalTime%24==8)
                    {
                     dayCycle.src = 'smile.gif';
                     dayCycle.alt = 'awake';
                    }
                      
                    
                  
                }
              else if (globalTime%24>=12)
                {
                  var dayCycle = document.getElementById('emoticon')

                  document.getElementById('period').textContent = 'PM';
                  
                  if(globalTime%24==12)
                    document.getElementById('time').textContent =12;
                  else
                    document.getElementById('time').textContent =globalTime%24-12;
                  
                  if (globalTime%24==20)
                    {
                     dayCycle.src = 'sleep.gif';
                     dayCycle.alt = 'sleep';
                    }
                }
             
                         
            },
            1000); 
