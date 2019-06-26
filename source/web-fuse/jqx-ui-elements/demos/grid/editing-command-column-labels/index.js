JQX('#grid', class {
    get properties() {
        return {
            appearance: {
                showRowNumber: true
            },
            dataSource: new JQX.DataAdapter(
			{
			    dataSource: generateData(1000),
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
                action: 'none',
                mode: 'row',
				commandColumn: {
					visible: true,
					displayMode: 'label',
					dataSource: {
						'commandColumnDelete': {visible: false}
					}
				}
            },
            columns: [
			{
			    label: 'First Name', dataField: 'firstName'
			},
			{
			    label: 'Last Name', dataField: 'lastName'
			},
			{ label: 'Product', dataField: 'productName', editor: 'autoComplete' },
			{ label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox' },
			{ label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
			{ label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
            ]
        }
    }
});

window.test = function(){
	alert("WOW");
}