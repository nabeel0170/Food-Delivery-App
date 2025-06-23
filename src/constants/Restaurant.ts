export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
}

export interface RecentOrderItem {
  id: string;
  restaurantName: string;
  items: string[];
  image: string;
}
