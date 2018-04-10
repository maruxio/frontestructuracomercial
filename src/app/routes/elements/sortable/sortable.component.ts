import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from './sortable.product';
import { TreeNode, TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

const actionMapping: IActionMapping = {
    mouse: {
        contextMenu: (tree, node, $event) => {
            $event.preventDefault();
            alert(`context menu for ${node.data.name}`);
        },
        dblClick: TREE_ACTIONS.TOGGLE_EXPANDED,
        click: (tree, node, $event) => {
            $event.shiftKey
                ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
                : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);


        }
    },
    keys: {
        [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
    }
};

@Component({
    selector: 'app-sortable',
    templateUrl: './sortable.component.html',
    styleUrls: ['./sortable.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SortableComponent implements OnInit {

    nodes: any[] = null;
   

    listOne: Array<string> = ['Canal', 'Subcanal', 'Producto', 'Colectivo', 'Agencia','Mediador'];

    
    customTemplateStringOptions = {
        // displayField: 'subTitle',
        isExpandedField: 'expanded',
        idField: 'uuid',
        getChildren: this.getChildren.bind(this),
        actionMapping,
        allowDrag: true
    };

    asyncChildren = [
        {
            name: 'child2.1',
            subTitle: 'new and improved'
        }, {
            name: 'child2.2',
            subTitle: 'new and improved2'
        }
    ];

    constructor() {
        setTimeout(() => {
            this.nodes = [
                {

                    expanded: true,
                    name: 'Ramo Asistencia Nueva Producción',
                    description: 'the root',
                    children: [
                        {
                            expanded: true,
                            name: 'Particular',
                            description: 'Particular',
                            children :[
                            {
                                expanded: true,
                                name: 'Menor 60 años',
                                children : [
                                {
                                    expanded:true,
                                    name: 'Primer año'

                                }, 
                                {
                                    expanded:true,
                                    name: 'Segundo año y sucesivos'

                                },


                                ]
                                
                            },
                            {
                                expanded: true,
                                name: '60 años o mayor',
                                children : [
                                {
                                    extended:true,
                                    name: 'Primer año'

                                }, 
                                {
                                    extended:true,
                                    name: 'Segundo año y sucesivos'

                                },


                                ]
                                


                            },



                            ]

                        }, {


                            expanded: true,
                            name: 'Familiar 2 o más personas',
                            description: 'Particular',
                            children :[
                            {
                                expanded: true,
                                name: 'Menor 60 años',
                                children : [
                                {
                                    extended:true,
                                    name: 'Primer año'

                                }, 
                                {
                                    extended:true,
                                    name: 'Segundo año y sucesivos'

                                },


                                ]
                                
                            },
                            {
                                expanded: true,
                                name: '60 años o mayor',
                                children : [
                                {
                                    extended:true,
                                    name: 'Primer año'

                                }, 
                                {
                                    extended:true,
                                    name: 'Segundo año y sucesivos'

                                },


                                ]
                                


                            },



                            ]




                        }, 
                    ]
                },
                
            ];
        }, 1);
    }

     getChildren(node: any) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.asyncChildren.map((c) => {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })), 1000);
        });
    }
    

    ngOnInit() {
    }

}
