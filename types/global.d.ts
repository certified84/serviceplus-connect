import { StackNavigationProp } from "@react-navigation/stack";

export {};

declare global {
  interface NavigationProps {
    navigation: NavigationProp<any, any>;
  }

  export type StackParamList = {
    HomeScreen: {};
    BookmarksScreen: { bookmarks: string[] };
  };

  interface Category {
    id: string;
    title: string;
  }

  interface Service {
    id: string;
    title: string;
    desc: string;
    images: string[];
    reviewCount: number;
    rating: number;
    price: number;
  }
}
