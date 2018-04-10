import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
    selector: 'app-navtree',
    templateUrl: './navtree.component.html',
    styleUrls: ['./navtree.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavtreeComponent implements OnInit {
    nodes: any[] = null;

    name = '';
    description = '';
    type = '';
    numAgentes = 0;
    numSupervisores = 0;



    asyncChildren = [
        {
            name: 'child2.1',
            subTitle: 'new and improved'
        }, {
            name: 'child2.2',
            subTitle: 'new and improved2'
        }
    ];

    customTemplateStringOptions = {
        // displayField: 'subTitle',
        isExpandedField: 'expanded',
        idField: 'uuid',
        getChildren: this.getChildren.bind(this),
        actionMapping,
        allowDrag: true
    };

    onEvent(msg) {
        console.log(msg);
    }

    constructor() {
        setTimeout(() => {
            this.nodes = [
                {

                    expanded: true,
                    name: 'Agencial',
                    description: 'the root',
                    children: [
                        {
                            name: 'Amsur',
                            description: 'Amsur',
                            type: 'Nivel 2',
                            numSupervisores: 5,
                            numAgentes: 3,
                            children:[]
                        }, {

                            name: 'Asnor',
                            type: 'Nivel 2',
                            description: 'Asnor',
                            numSupervisores: 1,
                            numAgentes: 5,
                            hasChildren: false
                        }, {

                            name: 'CTAS',
                            type: 'Nivel 2',
                            description: 'CTAS',
                            numSupervisores: 2,
                            numAgentes: 10,
                            hasChildren: false
                        }, {

                            name: 'Asgeca',
                            type: 'Nivel 2',
                            numSupervisores: 2,
                            numAgentes: 20,
                            description: 'Asgeca',
                            hasChildren: false
                        }, {

                            name: 'Asnorte',
                            type: 'Nivel 2',
                            numSupervisores: 5,
                            numAgentes: 55,
                            description: 'Asnorte',
                            hasChildren: false
                        }
                    ]
                },
                {
                    name: 'Exclusivos',
                    expanded: true,
                    subTitle: 'Canal exclusivos',
                    type: 'Canal',
                    children: [
                        {
                            name: 'Agencias exclusivas',
                            type: 'Agencia',
                            description: 'Agencia exclusivas 70 ',
                            numSupervisores: 2,
                            numAgentes: 202,
                            hasChildren: false
                        }, {

                            name: 'Agentes profesionales',
                            description: 'Agentes profesionales',
                            type: 'Agencia',
                            numSupervisores: 2,
                            numAgentes: 202,
                            hasChildren: false                            
                        }
                    ]
                },
                {
                    name: 'Corredores',
                    expanded: true,
                    subTitle: 'Corredores',
                    type: 'Canal',
                    numSupervisores: 2,
                    numAgentes: 202,
                    children: [
                        {
                            name: 'Corredor 1',
                            type: 'Corredor',
                            description: 'Corredor 1 ',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false
                        }, {

                            name: 'Corredor 2',
                            description: 'Corredor 2',
                            type: 'Corredor',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Corredor 3',
                            description: 'Corredor 3',
                            type: 'Corredor',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Corredor 4',
                            description: 'Corredor 4',
                            type: 'Corredor',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        }
                    ]
                },
                {
                    name: 'Bancaseguros',
                    expanded: true,
                    subTitle: 'Bancaseguros',
                    type: 'Canal',
                    numSupervisores: 2,
                    numAgentes: 202,
                    children: [
                        {
                            name: 'BSCH',
                            type: 'Acuerdo bancaseguros',
                            description: 'Corredor 1 ',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false
                        }, {

                            name: 'OBSV Popular',
                            description: 'OBSV Popular',
                            type: 'Acuerdo bancaseguros',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Evo Banco',
                            description: 'Evo Banco',
                            type: 'Acuerdo bancaseguros',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Avant Tarjeta',
                            description: 'Avant Tarjeta',
                            type: 'Acuerdo bancaseguros',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        }
                    ]
                },
                {
                    name: 'Web',
                    expanded: true,
                    subTitle: 'Canal Web',
                    type: 'Canal',
                    numSupervisores: 2,
                    numAgentes: 202,
                    children: [
                        {
                            name: 'Global Sale Solutions',
                            type: 'Agencia',
                            description: 'Global Sale 1 ',
                            numSupervisores: 1,
                            numAgentes: 0,
                            hasChildren: false
                        }, {

                            name: 'Web auxiliar externo',
                            description: 'Portal web auxiliar externo',
                            type: 'web',
                            numSupervisores: 1,
                            numAgentes: 0,
                            hasChildren: false                            
                        },
                        {

                            name: 'Consultas contratación web gestión',
                            description: 'Consultas contratación web gestión',
                            type: 'web',
                            numSupervisores: 1,
                            numAgentes: 0,
                            hasChildren: false                            
                        },
                        {

                            name: 'Antigua consideración Web para reg históricos',
                            description: 'Antigua consideración Web para reg históricos',
                            type: 'Histórico',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        }
                    ]
                },
                {
                    name: 'Directo',
                    expanded: true,
                    subTitle: 'Canal Directo',
                    type: 'Canal',
                    numSupervisores: 1,
                    numAgentes: 50,
                    children: [
                        {
                            name: 'Coaseguro tradicional',
                            type: 'Coaseguro',
                            description: 'Coaseguro tradicional ',
                            numSupervisores: 1,
                            numAgentes: 0,
                            hasChildren: false
                        }, {

                            name: 'Central - Pólizas empleados',
                            description: 'Central - Pólizas empleados',
                            type: 'subcanal',
                            numSupervisores: 1,
                            numAgentes: 0,
                            hasChildren: false                            
                        },
                        {

                            name: 'Compañía',
                            description: 'Compañía',
                            type: 'subcanal',
                            numSupervisores: 1,
                            numAgentes: 0,
                            hasChildren: false                            
                        },
                        {

                            name: 'Inversiones 2012 Inteligencia de negocio',
                            description: 'Inversiones 2012 Inteligencia de negocio',
                            type: 'subcanal',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'División Seguros Accepta',
                            description: 'División Seguros Accepta',
                            type: 'subcanal',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Servicio Atención al cliente',
                            description: 'Servicio Atención al cliente',
                            type: 'subcanal',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        }
                    ]
                },
                {
                    name: 'Acuerdos',
                    expanded: false,
                    subTitle: 'Acuerdos',
                    type: 'Canal',
                    numSupervisores: 1,
                    numAgentes: 50,
                    children: [
                        {
                            name: 'Acuerdos de planeta',
                            type: 'Acuerdo de distribución',
                            description: 'Acuerdos de planeta ',
                            numSupervisores: 1,
                            numAgentes: 0,
                            children: [
                            {
                                name: 'Global Sale Solutions',
                                type: 'Agencia',
                                description: 'Global Sale 1 ',
                                numSupervisores: 1,
                                numAgentes: 0,
                                hasChildren: false
                            },]
                        }, {

                            name: 'Sanitas',
                            description: 'Sanitas',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 0,
                            hasChildren: false                            
                        },
                        {

                            name: 'Reaseguro aceptado Pelayo',
                            description: 'Reaseguro aceptado Pelayo',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 0,
                            hasChildren: false                            
                        },
                        {

                            name: 'HNA Mutualidad',
                            description: 'HNA Mutualidad',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Cartera de SECI',
                            description: 'Cartera de SECI',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Cartera de Cisne',
                            description: 'Cartera de Cisne',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Thinksmart',
                            description: 'Thinksmart',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Uniglobal gestión',
                            description: 'Uniglobal gestión',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'PYA INSURANCE ADVISORS, S.L. ',
                            description: 'PYA INSURANCE ADVISORS, S.L. ',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Infomarktel. Sociedad de Responsabilidad',
                            description: 'Infomarktel. Sociedad de Responsabilidad',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Licitaciones Públicas',
                            description: 'Licitaciones Públicas',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        },
                        {

                            name: 'Atento',
                            description: 'Atento',
                            type: 'Acuerdo de distribución',
                            numSupervisores: 1,
                            numAgentes: 2,
                            hasChildren: false                            
                        }
                    ]
                },


            ];
        }, 1);
    }

    ngOnInit() {
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


    addNode(tree) {

        var nodo = tree.treeModel.getFocusedNode().data;

        if (nodo != null && nodo.children==null){
            nodo.children = [{name:'Nuevo nodo'}];
        } else {
            nodo.children.push( {
            name: 'Nuevo nodo'

        });

        }

        tree.treeModel.update();
    }

  


    childrenCount(node: TreeNode): string {
        return node && node.children ? `(${node.children.length})` : '';
    }

    filterNodes(text, tree) {
        tree.treeModel.filterNodes(text, true);
    }

    activateSubSub(tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    }

    go($event,tree) {

        $event.stopPropagation();
        if (tree.treeModel.getFocusedNode()!=null) {
            this.name = tree.treeModel.getFocusedNode().data.name;
            this.description = tree.treeModel.getFocusedNode().data.description;
            this.type = tree.treeModel.getFocusedNode().data.type;
            this.numAgentes = tree.treeModel.getFocusedNode().data.numAgentes;
            this.numSupervisores = tree.treeModel.getFocusedNode().data.numSupervisores;

        }

        


    }

}
