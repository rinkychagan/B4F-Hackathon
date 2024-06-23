import bcryptjs from "bcryptjs";
export const productsData = {
    users: [
        {
            name: 'Admin',
            email: 'admin@example.com',
            password: bcryptjs.hashSync('123'),
            isAdmin: true
        },
        {
            name: 'User',
            email: 'user@example.com',
            password: bcryptjs.hashSync('123'),
            isAdmin: false
        }
    ],
    products: [
    
        {
      
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            description: 'A slim fit shirt perfect for casual outings.',
            price: 120,
            brand: 'Adidas',
            category: 'shirts',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            banner: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
            quantity: 10,
            rating: 4.5,
            numReviews: 10,
            countInStock: 6,
            colors: ['red', 'green', 'blue'],
            sizes: ['small', 'medium', 'large']
        },
        {
            
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            description: 'A fitted shirt that offers a sleek look.',
            price: 100,
            brand: 'Adidas',
            category: 'shirts',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            banner: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
            quantity: 15,
            rating: 4.7,
            numReviews: 8,
            countInStock: 12,
            colors: ['black', 'white', 'grey'],
            sizes: ['small', 'medium', 'large']
        },
        {
          
            name: 'Best Pants',
            slug: 'best-pants',
            description: 'Comfortable and stylish pants for everyday wear.',
            price: 70,
            brand: 'Nike',
            category: 'pants',
            image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
            banner: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
            quantity: 20,
            rating: 4.8,
            numReviews: 15,
            countInStock: 10,
            colors: ['blue', 'black'],
            sizes: ['medium', 'large', 'x-large']
        },
        {
            
            name: 'Casual Jeans',
            slug: 'casual-jeans',
            description: 'Durable jeans for all occasions.',
            price: 80,
            brand: 'Levis',
            category: 'pants',
            image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
            banner: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_UX679_.jpg',
            quantity: 25,
            rating: 4.4,
            numReviews: 12,
            countInStock: 8,
            colors: ['blue', 'grey'],
            sizes: ['small', 'medium', 'large']
        },
        {
            
            name: 'Summer Dress',
            slug: 'summer-dress',
            description: 'Light and breezy dress perfect for summer.',
            price: 50,
            brand: 'H&M',
            category: 'dresses',
            image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
            banner: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
            quantity: 30,
            rating: 4.9,
            numReviews: 20,
            countInStock: 15,
            colors: ['yellow', 'pink'],
            sizes: ['small', 'medium']
        },
        {
           
            name: 'Winter Coat',
            slug: 'winter-coat',
            description: 'Warm and stylish coat for winter.',
            price: 150,
            brand: 'North Face',
            category: 'coats',
            image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
            banner: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
            quantity: 5,
            rating: 4.6,
            numReviews: 18,
            countInStock: 3,
            colors: ['black', 'blue'],
            sizes: ['medium', 'large', 'x-large']
        },
        {
          
            name: 'Running Shoes',
            slug: 'running-shoes',
            description: 'Comfortable running shoes for daily jogs.',
            price: 90,
            brand: 'Puma',
            category: 'shoes',
            image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_UX679_.jpg',
            banner: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
            quantity: 40,
            rating: 4.3,
            numReviews: 25,
            countInStock: 20,
            colors: ['red', 'blue'],
            sizes: ['8', '9', '10']
        },
        {
            name: 'Leather Jacket',
            slug: 'leather-jacket',
            description: 'Stylish leather jacket for a cool look.',
            price: 200,
            brand: 'Zara',
            category: 'jackets',
            image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
            banner: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
            quantity: 10,
            rating: 4.7,
            numReviews: 30,
            countInStock: 5,
            colors: ['black', 'brown'],
            sizes: ['medium', 'large']
        },
        {
           
            name: 'Yoga Pants',
            slug: 'yoga-pants',
            description: 'Comfortable pants for yoga and exercise.',
            price: 60,
            brand: 'Lululemon',
            category: 'pants',
            image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
            banner: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
            quantity: 35,
            rating: 4.8,
            numReviews: 50,
            countInStock: 25,
            colors: ['black', 'grey'],
            sizes: ['small', 'medium', 'large']
        },
        {
            
            name: 'Sneakers',
            slug: 'sneakers',
            description: 'Trendy sneakers for everyday use.',
            price: 80,
            brand: 'Nike',
            category: 'shoes',
            image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_UX679_.jpg',
            banner: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
            quantity: 50,
            rating: 4.9,
            numReviews: 45,
            countInStock: 30,
            colors: ['white', 'black'],
            sizes: ['8', '9', '10', '11']
        },
        {
           
            name: 'Sports Bra',
            slug: 'sports-bra',
            description: 'Supportive sports bra for workouts.',
            price: 40,
            brand: 'Under Armour',
            category: 'sportswear',
            image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
            banner: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
            quantity: 20,
            rating: 4.5,
            numReviews: 15,
            countInStock: 10,
            colors: ['black', 'white'],
            sizes: ['small', 'medium', 'large']
        },
        {
            
            name: 'Hiking Boots',
            slug: 'hiking-boots',
            description: 'Durable boots for outdoor adventures.',
            price: 120,
            brand: 'Columbia',
            category: 'shoes',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            banner: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_UX679_.jpg',
            quantity: 15,
            rating: 4.6,
            numReviews: 22,
            countInStock: 12,
            colors: ['brown', 'black'],
            sizes: ['9', '10', '11']
        },
        {
            name: 'Workout Shorts',
            slug: 'workout-shorts',
            description: 'Breathable shorts for exercise.',
            price: 30,
            brand: 'Reebok',
            category: 'shorts',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            banner: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
            quantity: 25,
            rating: 4.4,
            numReviews: 18,
            countInStock: 15,
            colors: ['black', 'grey'],
            sizes: ['small', 'medium', 'large']
        },
        {
           
            name: 'Beanie Hat',
            slug: 'beanie-hat',
            description: 'Warm beanie hat for winter.',
            price: 20,
            brand: 'Patagonia',
            category: 'accessories',
            image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
            banner: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
            quantity: 30,
            rating: 4.7,
            numReviews: 12,
            countInStock: 20,
            colors: ['blue', 'grey'],
            sizes: ['one-size']
        },
        {
         
            name: 'Graphic T-Shirt',
            slug: 'graphic-tshirt',
            description: 'Trendy graphic t-shirt with cool designs.',
            price: 25,
            brand: 'Uniqlo',
            category: 'shirts',
            image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_UX679_.jpg',
            banner: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
            quantity: 40,
            rating: 4.8,
            numReviews: 20,
            countInStock: 25,
            colors: ['white', 'black'],
            sizes: ['small', 'medium', 'large']
        }
    ]
}