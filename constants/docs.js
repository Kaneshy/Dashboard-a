export const pagesDocs = [
    {
        title: 'Getting started',
        categories: [
            {
                label:'Introduction',
                route:'/documentation/analytics'
            },
            {
                label:'Examples',
                route:'/documentation/analytics'
            }
        ]
    },
    {
        title: 'Inventory',
        categories: [
            {
                label:'Total inventory value',
                route:'/documentation/products'
            },
            {
                label:'Total stock',
                route:'/documentation/products'
            }
        ]
    },
    {
        title: 'API',
        categories: [
            {
                label:'Products',
                route:'/documentation/products'
            },
            {
                label:'Total inventory value',
                route:'/documentation/products'
            }
        ]
    }
]

export const analytics = [
    {
        title:'Total stock .totalValue',
        method:'GET',
        link:'https://dashboard-a.vercel.app/api/analytics/totalstock',
    },
    {
        title:'Total Inventory Value .lengthValue',
        method:'GET',
        link:'https://dashboard-a.vercel.app/api/analytics/totalstock',
    }
    
]

export const products = [
    {
        title:'GET products with pagination with pagination and page size 12',
        method:'GET',
        link:'https://dashboard-a.vercel.app/api/product?page=${page}',
    },
    {
        title:'GET by Id',
        method:'GET',
        link:'https://dashboard-a.vercel.app/api/product/[id]',
    },
    // {
    //     title:'DELETE by id',
    //     method:'DELETE',
    //     link:'https://dashboard-a.vercel.app/api/product/[id]',
    // },
    // {
    //     title:'PUT by Id',
    //     method:'PUT',
    //     link:'https://dashboard-a.vercel.app/api/product/[id]',
    // },
    // {
    //     title:'POST a new product',
    //     method:'GET',
    //     link:'https://dashboard-a.vercel.app/api/product',
    // },
    {
        title:'GET products by gender and categorie (masculino, femenino, kids, accesories, jewerly',
        method:'GET',
        link:'https://dashboard-a.vercel.app/api/product/bygender/[id]',
    },
    {
        title:'GET products by tags (pants, shirt, coat, sneakers...)',
        method:'GET',
        link:'https://dashboard-a.vercel.app/api/product/[id]',
    },
    {
        title:'SEARCH in every field in the product collection',
        method:'GET',
        link:'https://dashboard-a.vercel.app/api/product/Search/${product}?q=` + query',
    }

    
]