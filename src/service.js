// src/service/ProductService.js

export class ProductService {
    async getProductsMini() {
      try {
        // Example API endpoint; replace with actual API URL
        const response = await fetch('https://api.example.com/products-mini');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('There was an error fetching the products:', error);
        return [];
      }
    }
  }
  