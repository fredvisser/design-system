import "../../../source/jqxelement.js";
import "../../../source/jqxscrollbar.js";
import "../../../source/jqxdata.js";
import "../../../source/jqxbutton.js";
import "../../../source/jqxlistbox.js";
import "../../../source/jqxdropdownlist.js";
import "../../../source/jqxgrid.js";
import "../../../source/jqxpager.js";
import "../../../scripts/data.js";

(function GenerateData() {
    let data = new Array();
    let firstNames =
	[
		"Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
	];
    let lastNames =
	[
		"Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
	];
    let productNames =
	[
		"Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
	];
    let priceValues =
	[
		"2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
	];

    for (let i = 0; i < 5000; i++) {
        let row = {};
        let productindex = Math.floor(Math.random() * productNames.length);
        let price = parseFloat(priceValues[productindex]);
        let quantity = 1 + Math.round(Math.random() * 10);
        row["id"] = 1 + i;
        row["firstName"] = firstNames[Math.floor(Math.random() * firstNames.length)];
        row["lastName"] = lastNames[Math.floor(Math.random() * lastNames.length)];
        row["productName"] = productNames[productindex];
        row["available"] = (productindex % 2 === 0);
        row["price"] = price;
        row["quantity"] = quantity;
        row["total"] = price * quantity;
        data[i] = row;
    }

    window.Data = data;
}());

document.readyState === 'complete' ? init() : window.onload = init;

function init() {
    const grid = new jqxGrid('#grid', {
        dataSource: new JQX.DataAdapter(
        {
            dataSource: Data,
            dataFields:
            [
                'id: number',
                'firstName: string',
                'lastName: string',
                'productName: string',
                'available: bool',
                'quantity: number',
                'price: number',
                'total: number'
            ]
        }),
        editing: {
            enabled: true,
            mode: 'cell'
        },
        columns: [
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        { label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox' },
        { label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
        { label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
        ]
    });
}
