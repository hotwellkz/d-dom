export interface ProjectType {
    id: string;
    name: string;
    minPrice: number;
    maxPrice: number;
    minArea: number;
    maxArea: number;
    features: string[];
  }
  
  export const projectTypes = [
    {
      id: 'economy',
      name: 'Эконом',
      minPrice: 7000000,
      maxPrice: 12000000,
      minArea: 50,
      maxArea: 100,
      features: [
        'Базовая комплектация',
        'Простая планировка',
        'Стандартная отделка'
      ]
    },
    {
      id: 'standard',
      name: 'Стандарт',
      minPrice: 12000000,
      maxPrice: 18000000,
      minArea: 100,
      maxArea: 150,
      features: [
        'Улучшенная комплектация',
        'Оптимальная планировка',
        'Качественная отделка'
      ]
    },
    {
      id: 'premium',
      name: 'Премиум',
      minPrice: 18000000,
      maxPrice: 30000000,
      minArea: 150,
      maxArea: 300,
      features: [
        'Премиальная комплектация',
        'Свободная планировка',
        'Премиум отделка'
      ]
    }
  ];