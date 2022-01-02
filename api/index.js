

function generateTableHead(table, data) // Generates the headlines for the things
{
    let thead = table.createTHead();    // get the head
    let row = thead.insertRow();        // insert row

    // Iterate over things
    for(let key of data)// Data is a tuple of keys of the json
    {
        let th = document.createElement("th"); // Create the head
        let text = document.createTextNode(key); // Get the text
        console.log(text.nodeValue);
        th.appendChild(text);                   // Append the text to th
        row.appendChild(th);                    // add to table row    
    }
}

function generateTable(table, data)
{
    for(let element of data)
    {
        let row = table.insertRow(); // Insert a new row to populate
        for(key in element)          // Element will hold one row of data (1 obj)
        {
           
            let cell = row.insertCell(); // Insert the cell to row
            let text = document.createTextNode(element[key]); // Get the value of an element using key
            
            cell.appendChild(text);       // Append the text to the cell
            
        }
    }
}

function doTable(resp)
{
    let table = document.querySelector("table"); // Reference the table
    let data = Object.keys(resp[0]);        // Get a mt.
    generateTableHead(table, data);
    generateTable(table, resp);    
    console.log(resp);
}

//https://sam-k0.github.io/api/data.json

fetch('https://reflectionlink.herokuapp.com/score/hash/sigma')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(myJson)
    {
        console.log(myJson.username);
        // Try to do the thing

        var result = [];

        for(var i in myJson)
        {
            delete myJson[i]['id'];
            delete myJson[i]['maphash'];
            result.push(myJson[i]);
        }
        
        console.log(result);
        doTable(result);

    })
    .catch(function(err)
    {
        console.log("Error: " + err);
    })
