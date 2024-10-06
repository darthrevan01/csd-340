let entries = [];

function addEntry() {
    const textBox = document.getElementById('textBox'); // get the text box
    const textValue = textBox.value; // get the value in the box

    if (textValue) { // if there is a value in the box, add it to the entry array
        entries.push(textValue);
        alert(`Item: ${textValue} has been added at index ${entries.length}`);
        textBox.value = '';
    } else { // if there is no value to add, send an error
        alert("Please enter a value to add to the system!")
    }
}

function deleteLastEntry() {
    if (entries.length > 0) { // if there are entries in the array, find the last and remove it
        const deletedEntry = entries.pop();
        alert(`Deleted last entry: ${deletedEntry}`);
    } else { // if there are no entries to find, send an error
        alert("No entries to delete!")
    }
}

function displayContents() {
    const displayArea = document.getElementById('displayArea');
    if (entries.length > 0) { // if there are entries, display them from 1 to i
        let displayContent = "";
        for (let i = 0; i < entries.length; i++) {
            displayContent += (i + 1) + ". " + entries[i] + "<br>";
        }
        displayArea.innerHTML = displayContent;
    } else { // if there are no entries, send the message there is nothing to display
        displayArea.innerHTML = "No entries to display";
    }
}