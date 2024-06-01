
document.querySelector("button").addEventListener('click',function(){

    let input = document.querySelector("input").value.trim();
        if(input != ""){

            console.log("Added: "+ input);

            let newListItem = document.createElement("li");

            let spanText=document.createElement("span");
            spanText.textContent=input;

            let taskCheckbox = document.createElement('input');
            taskCheckbox.type = "checkbox";
            
            let editBtn = document.createElement('button');
            editBtn.textContent= "Edit";

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
           

            document.querySelector("ul").append(newListItem);
            newListItem.append(taskCheckbox);
            newListItem.append(spanText);
            newListItem.append(editBtn);
            newListItem.append(deleteBtn);


            taskCheckbox.addEventListener('change',function(){
                
                if(taskCheckbox.checked){
                    
                    spanText.style.textDecoration = "line-through";
                    newListItem.style.opacity=0.5;
                    // newListItem.style.backgroundColor = '#28a745';
                }
                else{
                    spanText.style.textDecoration = "none";
                    newListItem.style.opacity = 1;
                    // newListItem.style.backgroundColor = '#ff6f61';
                }
            
            });

            editBtn.addEventListener('click', function() {
                let newInput = prompt("Edit your task", spanText.textContent);
                if (newInput !== null && newInput.trim() !== "") {
                    spanText.textContent = newInput.trim();
                    newListItem.style.opacity = 1;
                    spanText.style.textDecoration = "none";
                    taskCheckbox.checked=false;
                    
                }
            });

            
            deleteBtn.addEventListener('click',function(){
                
                newListItem.remove();
                // alert(`Task ${input} Deleted`);
                
            });

            









            document.querySelector("input").value="";  
        }
        else{
            
            alert("Enter Something");
        } 
       


});

