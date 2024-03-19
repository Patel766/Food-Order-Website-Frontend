import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) : Foods[]{
    if(tag == 'All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      { name: 'All', count: 8},
      { name: 'FastFood', count: 4},
      { name: 'Lunch', count: 2},
      { name: 'Breakfast', count: 3},
      { name: 'Brunch', count: 2},
      { name: 'Dinner', count: 2},
    ]
  }

  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Burger',
        CookTime: '15-20',
        price: 120,
        favourite: false,
        origins: ['Germany', 'USA'],
        star: 4.5,
        imageUrl: '/assets/Burger.jpeg',
        tags: ['FastFood', 'Breakfast']
      },
      {
        id: 2,
        name: 'Chowmein',
        CookTime: '15-20',
        price: 100,
        favourite: true,
        origins: ['China'],
        star: 4.0,
        imageUrl: '/assets/Chowmein.jpeg',
        tags: ['FastFood']
      },
      {
        id: 3,
        name: 'Egg Roll',
        CookTime: '10-15',
        price: 80,
        favourite: true,
        origins: ['India','South Asia'],
        star: 4.8,
        imageUrl: '/assets/Egg Roll.jpeg',
        tags: ['FastFood', 'BreakFast']
      },
      {
        id: 4,
        name: 'French Fries',
        CookTime: '25-30',
        price: 120,
        favourite: false,
        origins: ['USA'],
        star: 4.2,
        imageUrl: '/assets/French Fries.jpeg',
        tags: ['FastFood', 'Snacks']
      },
      {
        id: 5,
        name: 'Meat-balls',
        CookTime: '25-30',
        price: 200,
        favourite: true,
        origins: ['Turkey'],
        star: 4.5,
        imageUrl: '/assets/Meat-balls.jpeg',
        tags: ['Dinner']
      },
      {
        id: 6,
        name: 'Pasta',
        CookTime: '20-25',
        price: 150,
        favourite: false,
        origins: ['Italy', 'Greece'],
        star: 3.8,
        imageUrl: '/assets/Pasta.jpeg',
        tags: ['Lunch', 'Brunch']
      },
      {
        id: 7,
        name: 'Pizza',
        CookTime: '30-35',
        price: 200,
        favourite: false,
        origins: ['Italy'],
        star: 4.3,
        imageUrl: '/assets/Pizza.jpeg',
        tags: ['Lunch', 'Dinner']
      },
      {
        id: 8,
        name: 'Sandwich',
        CookTime: '15-20',
        price: 140,
        favourite: true,
        origins: ['England'],
        star: 4.2,
        imageUrl: '/assets/Sandwich.jpeg',
        tags: ['Breakfast', 'Brunch']
      }
    ]
  }
}
