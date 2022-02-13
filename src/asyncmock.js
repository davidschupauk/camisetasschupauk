export const products = [
    {
        id: 1,
        title: "Independiente",
        stock: 15,
        price: 9999,
        img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1644705006/independiente_vgtign.jpg',
        category: "Argentina"

    },
    {
        id: 2,
        title: "Argentina",
        stock: 12,
        price: 10235,
        img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1644704998/argentina_gh7gcg.jpg',
        category: "Selecciones"
    },
    {
        id: 3,
        title: "Manchester United",
        stock: 7,
        price: 9830,
        img: 'https://res.cloudinary.com/dxxjxc1fu/image/upload/v1644704989/manutd_ryiip5.jpg',
        category: "Europa"

    }
];

export const getProducts = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(products);
    }, 2000)
})


