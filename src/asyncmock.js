const products = [
    {id: 1, title: "Independiente", stock: 15, price: 9999, img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1644705006/independiente_vgtign.jpg', category: "Argentina", description: "Camiseta titular Roja"},
    {id: 2, title: "Argentina", stock: 12, price: 10235, img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1645735346/AD_FS6565-1_vb4rrb.jpg', category: "Selecciones", description: "Camiseta titular celeste y blanca"},
    {id: 3, title: "Manchester United", stock: 7, price: 9830, img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1644704989/manutd_ryiip5.jpg', category: "Europa", description: "Camiseta titular Roja"},
    {id: 4, title: "Palmeiras", stock: 31, price: 7325, img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1645735586/camisetas-puma-palmeiras-2019-2_sizbr1.jpg', category: "America", description: "Camiseta titular verde"},
    {id: 5, title: "Universidad de Chile", stock: 40, price: 99430, img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1645735825/Camiseta_Local_Club_Universidad_de_Chile_22-23_Azul_GA3836_01_laydown_y11pwz.jpg', category: "America", description: "Camiseta titular azul"},
    {id: 6, title: "Aldosivi", stock: 17, price: 6500, img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1645735800/agshdjykuyliu1-1a648d8d06b2c2502316328772202221-1024-1024_ggx0fc.png', category: "Argentina", description: "Camiseta titular verde y amarilla"}
];

const categories = [
    {id: 'Argentina', description: 'Argentina'},
    {id: 'Selecciones', description: 'Selecciones'},
    {id: 'Europa', description: 'Europa'},
    {id: 'America', description: 'America'}
]

export const getProducts = (idCategory) => {
    return new Promise((resolve)=>{
        const productsToResolve = idCategory ? products.filter(item => item.category === idCategory) : products
        setTimeout(() => {
            if(idCategory){
                resolve(productsToResolve.filter(p => p.category == idCategory))
            }else{
                resolve(productsToResolve);
            }
        }, 2000)
    }); 
}

export const getProduct = (id) => {
        return new Promise((resolve)=>{
        const prod = products.find(p => p.id === id)
        setTimeout(() => {
            resolve(prod);
        }, 2000)
    })
}


export const getCategories =()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(categories)
        }, 1000)
    })
}