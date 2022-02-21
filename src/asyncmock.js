const products = [
    {id: 1, title: "Independiente", stock: 15, price: 9999, img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1644705006/independiente_vgtign.jpg', category: "Argentina", description: "Camiseta titular Roja"},
    {id: 2, title: "Argentina", stock: 12, price: 10235, img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1644704998/argentina_gh7gcg.jpg', category: "Selecciones", description: "Camiseta titular celeste y blanca"},
    {id: 3, title: "Manchester United", stock: 7, price: 9830, img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1644704989/manutd_ryiip5.jpg', category: "Europa", description: "Camiseta titular Roja"}
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
            resolve(productsToResolve);
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
    return new PromiseRejectionEvent((resolve) => {
        setTimeout(()=>{
            resolve(categories)
        }, 1000)
    })
}