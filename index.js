function loop(){
    var head = document.getElementsByTagName('HEAD')[0];  
    var link = document.createElement('link'); 
    link.rel = 'stylesheet';  
    link.type = 'text/css'; 
    link.href = 'style.css';  
    head.appendChild(link);  
    for(var i=0 ; i<8 ; i++){
        
        var tableRowElement = document.getElementsByTagName("tbody")[0];
        var tag = document.createElement("tr");
        tableRowElement.appendChild(tag);

        var colTag1 = document.createElement("td");
        var colTag2 = document.createElement("td");
        var colTag3 = document.createElement("td");
        var colTag4 = document.createElement("td");
        var colTag5 = document.createElement("td");
        var colTag6 = document.createElement("td");
        var colTag7 = document.createElement("td");
        var colTag8 = document.createElement("td");
        colTag1.classList.add = "tg-0lax";
        colTag2.classList.add = "tg-0lax";
        colTag3.classList.add = "tg-0lax";
        colTag4.classList.add = "tg-0lax";
        colTag5.classList.add = "tg-0lax";
        colTag6.classList.add = "tg-0lax";
        colTag7.classList.add = "tg-0lax";
        colTag8.classList.add = "tg-0lax";
        
        tag.appendChild(colTag1);
        tag.appendChild(colTag2);
        tag.appendChild(colTag3);
        tag.appendChild(colTag4);
        tag.appendChild(colTag5);
        tag.appendChild(colTag6);
        tag.appendChild(colTag7);
        tag.appendChild(colTag8);
        
    }
}

loop();
