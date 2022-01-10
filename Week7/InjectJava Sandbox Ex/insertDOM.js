function addItem() {
    // TODO: add 'item' to the list of TODOs
  
    //Step 1: identify the value of the myInput element. 
    var inputs = document.getElementById("myInput").value;
    //Step 2: Create a text node containing that value
    var txt = document.createTextNode(inputs);
    //Step 3: Create a new li element and append the text node to it
    var li = document.createElement('li');
    li.appendChild(txt); 
    //Step 4: Append the li element to the existing myTODOs element. 
    document.getElementById("myTODOs").appendChild(li);
  }
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = addItem;
  }
  