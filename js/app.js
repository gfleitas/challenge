function myFunction(){
    var text;
    text = document.querySelector("#text").value;
    if(typeof(Storage) !== 'undefined'){
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        localStorage.setItem("Tweet" + localStorage.clickcount,text);

        location.reload(true);
    }
 }
     

             
for(var i = 0; i < localStorage.clickcount; i++)
    {  
     var getTweet = localStorage.getItem("Tweet" + (i + 1));

     var li = document.createElement("li");
     li.setAttribute('id','Tweet' +  (i + 1));

     var text = document.createTextNode(getTweet);

     li.appendChild(text);

     var iconTimes = document.createElement("i");
     iconTimes.classList.add("fa","fa-times","right");
     li.appendChild(iconTimes);

     var ulist = document.getElementById("show");
     ulist.appendChild(li);

     iconTimes.addEventListener('click',function(event){

        var deleteIcon = event.target.parentNode;

        var deleteIconId = deleteIcon.id;

        deleteIcon.parentNode.removeChild(deleteIcon);
        localStorage.removeItem(deleteIconId);
        localStorage.clickcount--;

     },false);
    }  