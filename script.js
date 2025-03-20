function start(){
    let datetimeValue = document.getElementById("datetimer").value; 

    let datetime = new Date(datetimeValue);
    
    let days = datetime.getDay();
    
    let hour = datetime.getHours();
    
    let minutes = datetime.getMinutes();
    
    let seconds = datetime.getSeconds();

      document.getElementById("day").textContent = days;
      document.getElementById('hour').textContent = hour;
      document.getElementById('min').textContent = minutes;
      document.getElementById('sec').textContent = seconds ;
}