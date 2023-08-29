function newItem() {

    //***1. Adding a new item to the list of items.
    //***Allow each <li> to be stored inside the li variable.
    let li = $('<li></li>');
    //***Allow to get the input of the users (inside the input field on the webpage) and store it inside the variable inputValue.
    let inputValue = $('#input').val();
    //***Allow to append the input from users stored inside the inputValue variable in a <li> from the li variable.
    li.append(inputValue);

    //***Display error message if user write nothing in the input bar.
    if (inputValue === '') {
        alert("You must write something!");
        //***Allow every correct list item (li) created by user to be appended inside the <ol> (id="list") element wihtin the HTML file.
    } else {
        $('#list').append(li);
    }

    //***2. Crossing out an item from the list of items.
    //***Creatin of the crossOut function.
    function crossOut() {
        //***Add the class 'strike' to the list item who's been double clicked on - and because of this new added class, the cross-line over the text is activated and appears for that specific item of the list (because of a command in CSS for that class).
        li.toggleClass("strike");
    }
    //***Call the crossOut function whenever a user click twice on a list item.
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //***3. Adding the delete button "X".
    //***Allow each <crossOutButton> to be stored inside the crossOutButton variable.
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    //***Allow the creation of the 'X' beside each item elements from the list
    crossOutButton.append(document.createTextNode("X"));
    //***Allow to append the 'X' to each list item created by users.
    li.append(crossOutButton);

    //***Call the deleteListItem function whenever a user click on a crossOutButton ('X')
    crossOutButton.on("click", deleteListItem);
    //***Add the class 'delete' to the list item who's been double clicked on - and because of this new added class, the specific item is delete (because of a command in CSS for that class).
    function deleteListItem() {
        li.addClass("delete")
    }

    //***4. Reordering the items.
    //***Allow every item from the <ol> (id="list") to be sortable.
    $('#list').sortable();
}