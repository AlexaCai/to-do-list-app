
function newItem() {

    //Initial JAVASCRIPT
    //1. Adding a new item to the list of items: 
    //let li = document.createElement("li");
    //let inputValue = document.getElementById("input").value;
    //let text = document.createTextNode(inputValue);
    //li.appendChild(text);

    //New JQUERY
    //1. Adding a new item to the list of items: 
    //Transform of javascript lines of code upper into jQuery
    //Allow each <li> (list item) to be stored inside the li variable
    let li = $('<li></li>');
    //Allow to get the inputs of the user (inside the input field bar on the webpage) and store it inside the variable inputValue
    let inputValue = $('#input').val();
    //Allow to append the input from a user stored inside the inputValue variable to a <li> from the li variable
    li.append(inputValue);

    //Display error message of user write nothing in the input bar
    if (inputValue === '') {
        alert("You must write something!");
        //Allow every correct list item (li) created by user to be appended inside the <ol> (id="list") element
    } else {
        $('#list').append(li);
    }

    //Initial JAVASCRIPT
    //2. Crossing out an item from the list of items:
    //function crossOut() {
    //li.classList.toggle("strike");
    //}

    //li.addEventListener("dblclick",crossOut);

    //New JQUERY
    //2. Crossing out an item from the list of items:
    //Transform of javascript lines of code upper into jQuery
    function crossOut() {
        //Add the class 'strike' to the list item who's been double clicked on - and because of this new added class, the cross-line over the text is activated and appears for that specific item of the list (because of a command in CSS for that class)
        li.toggleClass("strike");
    }
    //Call the crossOut function whenever a user click twice on a list item
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //Initial JAVASCRIPT
    //3(i). Adding the delete button "X": 
    //let crossOutButton = document.createElement("crossOutButton");
    //crossOutButton.appendChild(document.createTextNode("X"));
    //li.appendChild(crossOutButton);

    //crossOutButton.addEventListener("click", deleteListItem);
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    //function deleteListItem(){
    //li.classList.add("delete")
    //}

    //New JQUERY
    //3(i). Adding the delete button "X": 
    //Transform of Javascript lines of code upper into jQuery
    //Allow each <crossOutButton> to be stored inside the crossOutButton variable
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    //Allow the creation of the 'X' beside each item elements from the list
    crossOutButton.append(document.createTextNode("X"));
    //Allow to append the 'X' to each list item created by a user
    li.append(crossOutButton);

    //Call the deleteListItem function whenever a user click on a crossOutButton ('X')
    crossOutButton.on("click", deleteListItem);
    //Add the class 'delete' to the list item who's been double clicked on - and because of this new added class, the specific item is delete because of a command in CSS for that class
    function deleteListItem() {
        li.addClass("delete")
    }

    //javascript and jQuery
    // 4. Reordering the items: 
    //Allow every item from the <ol> (id="list") to be sortable.
    $('#list').sortable();

}

