export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
  }
  
  export const categories: Category[] = [
    {
      id: 'sip',
      name: 'СИП дом',
      description: 'Современные дома из СИП панелей',
      image: 'https://hotwell.kz/wp-content/uploads/2022/09/001-Novinka-Ekonom-3.jpg'
    },
    {
      id: 'our-works',
      name: 'Наши работы',
      description: 'Реализованные проекты',
      image: 'https://hotwell.kz/wp-content/uploads/2022/10/014.jpeg'
    },
    {
      id: '2012',
      name: 'Объекты 2012г',
      description: 'Проекты, реализованные в 2012 году',
      image: 'https://hotwell.kz/wp-content/uploads/2022/10/240.jpg'
    }
  ];