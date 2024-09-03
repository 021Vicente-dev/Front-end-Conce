export interface Vehicle {
   id: number;
   name: string;
   model: string;
   price: number;
   peso: number;
   img: string;
   category: 'carro' | 'moto' | 'caminhão' | 'bicicleta';
}
