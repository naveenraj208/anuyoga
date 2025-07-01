// data/blogsData.ts

export interface Blog {
    id: number;
    image: string;
    title: string;
    summary: string;
  }
  
  export const blogsData: Blog[] = [
    {
      id: 1,
      image: '/blog1.jpg',
      title: 'International Yoga Day 2025',
      summary: 'Start your day with energy and clarity through simple morning yoga stretches.',
    },
    {
      id: 2,
      image: '/blog2.jpg',
      title: 'Breathwork Techniques',
      summary: 'Learn pranayama techniques to calm the mind and strengthen the lungs.',
    },
    {
      id: 3,
      image: '/blog3.jpg',
      title: 'Yoga for Back Pain',
      summary: 'Explore poses that relieve tension and build support for your lower back.',
    },
    
  ];
  