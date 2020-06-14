$(magicFunction)

function magicFunction() {
    let inpName = $('#name');
    let inpAge = $('#age');
    let inpPlace = $('#place');
    let btnAdd = $('#submit');
    let tableRef = $('#persons');

    function refreshPersonTable(persons) {
        tableRef.empty();
        tableRef.append(` 
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Place</th>
        </tr>
        `);
        for(let person of persons) {
            tableRef.append(` 
            <tr>
            <th>${person.name}</th>
            <th>${person.age}</th>
            <th>${person.place}</th>
            </tr>
            `);
        }
    }
    $.get('/api',(data) => {
        refreshPersonTable(data)
    })
    btnAdd.click(() => {
        console.log("Button Clicked")
    })
}