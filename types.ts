export interface StoreApiResponse {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number
    }
}

export interface ProductProps {
    data: {
        title: string;
        description: string;
        thumbnailUrl: string;
        thumbnailAlt: string;
        rating: number;
    }
}