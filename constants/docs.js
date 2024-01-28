export const pagesDocs = [
    {
        title: 'Getting started',
        categories: [
            {
                label:'Introduction',
                route:'/documentation/intoduction'
            },
            {
                label:'Examples',
                route:'/documentation/examples'
            }
        ]
    },
    {
        title: 'Inventory',
        categories: [
            {
                label:'Total inventory value',
                route:'/documentation/tiv'
            },
            {
                label:'Total stock',
                route:'/documentation/tstock'
            }
        ]
    }
]

export const codeLinks = [
    {
        title:'Total stock',
        method:'GET',
        link:'http://localhost3000/api/product/[id]'
    },
    {
        title:'Total inventory value',
        method:'GET',
        link:'http://localhost3000/api/value'
    },
    {
        title:'Total inventary value',
        method:'POST',
        link:'http://localhost3000/api/inventory'
    },
    
]