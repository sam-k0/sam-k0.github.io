let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
];



function generateTableHead(table, data) // Generates the headlines for the things
{
    let thead = table.createTHead();    // get the head
    let row = thead.insertRow();        // insert row

    // Iterate over things
    for(let key of data)// Data is a tuple of keys of the json
    {
        let th = document.createElement("th"); // Create the head
        let text = document.createTextNode(key); // Get the text
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




//const http = new XMLHttpRequest()
//http.open("GET", "https://reflectionlink.herokuapp.com/user/0");
//http.send();
//http.onload = () => doTable(mountains);


//doTable(mountains)

fetch('https://sam-k0.github.io/api/data.json')
    .then(res => res.json())
    //.then(data => console.log(data.data))
    .then(data => doTable(data.data))

