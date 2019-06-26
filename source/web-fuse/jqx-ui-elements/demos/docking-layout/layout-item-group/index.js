window.onload = function () {
    const docking = document.querySelector('jqx-docking-layout');

    docking.layout = [
        {
            //The Base Group
            type: 'LayoutGroup',
            orientation: 'vertical',
            items: [
                {
                    //DockingLayout Item A
                    label: 'TabsWindow A',
                    size: '25%',
                    items: [{
                        //Tab Item A1 of Item A
                        label: 'Tab A1',
                        content: 'Content of A1'
                    }]
                },
                {
                    //A new Inner Horizontal Panel Group
                    type: 'LayoutGroup',
                    orientation: 'horizontal',
                    items: [
                        {
                            //DockingLayout Item B
                            label: 'TabsWindow B',
                            size: '50%',
                            items: [{
                                //Tab Item B1 of Item B
                                label: 'Tab B1',
                                selected: true,
                                content: 'Content of B1'
                            },
                            ]
                        },
                        {
                            //DockingLayout Item C
                            label: 'TabsWindow C',
                            size: '50%',
                            items: [{
                                //Tab Item C2 of Item C
                                label: 'Tab C2',
                                content: 'Content of C2'
                            }]
                        }
                    ]
                },
                {
                    //A new Inner Vertical Panel Group
                    type: 'LayoutGroup',
                    orientation: 'vertical',
                    size: '25%',
                    items: [
                        {
                            //DockingLayout Item D
                            label: 'TabsWindow D',
                            size: '50%',
                            items: [{
                                //Tab Item D1 of Item D
                                label: 'Tab D1',
                                content: 'Content of D1'
                            }]
                        },
                        {
                            //DockingLayout Item E
                            label: 'TabsWindow E',
                            size: '50%',
                            items: [{
                                //Tab Item E1 of Item E
                                label: 'Tab E1',
                                content: 'Content of E1'
                            }]
                        }
                    ]
                }
            ]
        }];
}