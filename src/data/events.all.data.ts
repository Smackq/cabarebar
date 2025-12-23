export type PropsEvent = {
    id: string,
    img: string,
    title: string,
    description: string,
    price: string,
    date: string,
    dataTcEvent: string, 
    dataTcToken: string,
    schema: boolean,
    prewDate:string
}

export const EVENTSINFOALL: PropsEvent[] = [


    
    {
        id: "7",
        img: '/imagesForAfisha/corp1.jpg',
        title: 'Корпоративные вечера в стиле голливудской сказки',
        description: 'Welcome drink, фуршет и шоу программа!',
        price: "≈ 3900",
        date: '26.12.2025',
        dataTcEvent: "693bd8233c0bc02c020df0ab",
        dataTcToken: "eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjhkYjkxMjc3ZDk2N2IyZWRkYWIzOWVjIn0.x53ioRnq2WdVMPetZaGGXsvm74ZWDn0xYumYpfGofL0",
        schema: true,
        prewDate: '26.12.2025 19:00'
    },
    {
        id: "8",
        img: '/imagesForAfisha/corp1.jpg',
        title: 'Корпоративные вечера в стиле голливудской сказки',
        description: 'Welcome drink, фуршет и шоу программа!',
        price: "≈ 3900",
        date: '27.12.2025',
        dataTcEvent: "693bd85d63644d6c6975b649",
        dataTcToken: "eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjhkYjkxMjc3ZDk2N2IyZWRkYWIzOWVjIn0.x53ioRnq2WdVMPetZaGGXsvm74ZWDn0xYumYpfGofL0",
        schema: true,
        prewDate: '27.12.2025 19:00'
    },
    
    {
        id: "9",
        img: '/imagesForAfisha/ng.jpg',
        title: 'Новогодняя ночь в стиле Золотой Голливуд',
        description: 'Иллюзионист, танцевальные номера и живой вокал',
        price: "≈ 9800",
        date: '31.12.2025',
        dataTcEvent: "",
        dataTcToken: "",
        schema: false,
        prewDate: '31.12.2025'
    },
    
]

