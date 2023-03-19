import product1 from '../images/1.jpg'
import product2 from '../images/2.jpg'
import product3 from '../images/3.jpg'
import product4 from '../images/4.jpg'
import product5 from '../images/5.jpg'
import product6 from '../images/6.png'
import product7 from '../images/7.jpg'
import product8 from '../images/8.jpg'
import product9 from '../images/9.jpg'
import product10 from '../images/10.png'
import product11 from '../images/11.png'
import product12 from '../images/12.jpg'
import product13 from '../images/13.jpg'
import product14 from '../images/14.png'
import product15 from '../images/15.jpg'
import product16 from '../images/16.jpg'
import product17 from '../images/17.webp'
import product18 from '../images/18.jpg'
import product19 from '../images/19.jpg'
import product20 from '../images/20.jpg'
import product21 from '../images/21.jpg'
import product22 from '../images/22.png'

const products = [ 
    {   id: "01", 
        productName: "Stone and Beam Westview ", 
        imgUrl: product1, 
        category: "sofa", 
        price: 193, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   rating: 4.7, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.5, 
    }, 
    
    {   id: "02", 
        productName: "Rivet Bigelow Modern", 
        imgUrl: product2, 
        category: "sofa", 
        price: 253, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   rating: 4.8, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            {   rating: 4.8, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            }, 
        ], 
        avgRating: 4.7, 
    }, 
        
    { 
        id: "03", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product3, 
        category: "sofa", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "04", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product4, 
        category: "sofa", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "05", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product5, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "06", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product6, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "07", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product7, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "08", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product8, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "09", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product9, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "10", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product10, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "11", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product11, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "12", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product12, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "13", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product13, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "14", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product14, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "15", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product15, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "16", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product16, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "17", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product17, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "18", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product18, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "19", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product19, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "20", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product20, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "21", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product21, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    { 
        id: "22", 
        productName: "Amazon Brand Modern Sofa", 
        imgUrl: product22, 
        category: "gadgets", 
        price: 173, 
        shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
        reviews: [ 
            {   
                rating: 4.6, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
            { 
                rating: 4.9, 
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
            }, 
        ], 
        avgRating: 4.7, 
    }, 

    // { 
    //     id: "12", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: product12, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "13", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg13, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "14", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg14, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "15", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg15, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "16", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg16, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "17", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg17, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "18", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg18, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "19", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg19, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "20", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg20, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "21", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg21, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "22", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg22, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "23", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg23, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "24", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg24, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "25", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg025, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 

    // { 
    //     id: "26", 
    //     productName: "Amazon Brand Modern Sofa", 
    //     imgUrl: productImg26, 
    //     category: "sofa", 
    //     price: 173, 
    //     shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!", 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!", 
    //     reviews: [ 
    //         {   
    //             rating: 4.6, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //         { 
    //             rating: 4.9, 
    //             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    //         }, 
    //     ], 
    //     avgRating: 4.7, 
    // }, 
]

export default products;