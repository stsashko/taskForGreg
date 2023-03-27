import { faker } from '@faker-js/faker';

interface IWorks {
    id: number
    categories: number[],
    image: string
    title: string
    description: string
}

const createRandomWorks = (): IWorks  => {
    let title = faker.random.words(2);
    return {
        id: faker.datatype.number({min: 10}),
        categories: [faker.datatype.number({min: 1, max: 4}), faker.datatype.number({min: 1, max: 4})],
        image: faker.image.image(369, 433),
        title: title.charAt(0).toUpperCase() + title.slice(1),
        description: faker.random.words(4),
    };
}

export const getOurWorksFaker = () => {
    const works: IWorks[] = [
        {id: 1, categories: [1, 2, 4], image: '/images/image1.jpg', title: 'Financial Agent', description: 'UX / UI DESIGN, WEB DEVELOPMENT, BRANDING'},
        {id: 2, categories: [1, 2], image: '/images/image2.jpg', title: 'ALEXA Private Cruises', description: 'UX / UI DESIGN, WEB DEVELOPMENT'},
        {id: 3, categories: [1, 2, 4], image: '/images/image3.jpg', title: '3D / CNC Models', description: 'UX / UI DESIGN, WEB DEVELOPMENT, BRANDING'},
        {id: 4, categories: [1, 2], image: '/images/image4.jpg', title: 'BektonFood', description: 'UX / UI DESIGN, WEB DEVELOPMENT, BRANDING'},
        {id: 5, categories: [1, 2], image: '/images/image5.jpg', title: 'MoreLegal', description: 'UX / UI DESIGN, WEB DEVELOPMENT, BRANDING'},
        {id: 6, categories: [1, 2], image: '/images/image6.jpg', title: 'ROLO', description: 'UX / UI DESIGN, WEB DEVELOPMENT'},
        {id: 7, categories: [1, 2, 4], image: '/images/image7.jpg', title: 'Clinical Services', description: 'UX / UI DESIGN, WEB DEVELOPMENT, BRANDING'},
        {id: 8, categories: [1, 2], image: '/images/image8.jpg', title: 'Marvellous Magic Mirror', description: 'UX / UI DESIGN, WEB DEVELOPMENT'},
        {id: 9, categories: [1, 2], image: '/images/image9.jpg', title: 'SRNA', description: 'UX / UI DESIGN, WEB DEVELOPMENT'}
    ];

    Array.from({ length: 100 }).forEach(() => {
        works.push(createRandomWorks());
    });

    return works;
}