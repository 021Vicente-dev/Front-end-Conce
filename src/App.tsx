import React, { useState, ChangeEvent } from 'react';
import { Vehicle } from './types/types';

const vehicles: Vehicle[] = [
  //Carros
  { id: 1, name: "Adder", model: "adder", price: 1000000, img: '../public/img_carros/adder.png', category: 'carro', peso: 50 },
  { id: 2, name: "Zentorno", model: "zentorno", price: 900000, img: '../public/img_carros/zentorno.png', category: 'carro', peso: 50 },
  { id: 3, name: "Lambo", model: "Lambo", price: 300000, img: "../public/img_carros/lambo.png", category: 'carro', peso: 50 },
  //bicicleta
  { id: 4, name: "Bike", model: "bike", price: 50000, img: '../public/img_bikes/bike1.png', category: 'bicicleta', peso: 0 },
  { id: 5, name: "Bike", model: "bike", price: 50000, img: '../public/img_bikes/bike2.png', category: 'bicicleta', peso: 0 },
  { id: 6, name: "Bike", model: "bike", price: 50000, img: '../public/img_bikes/bike3.png', category: 'bicicleta', peso: 0 },
  //Motos
  { id: 7, name: "CG Fan 160", model: "CITY", price: 15000, img: '../public/img_motos/fan160.png', category: 'moto', peso: 20 },
  { id: 8, name: "Pop 100", model: "CITY", price: 15000, img: '../public/img_motos/pop100.png', category: 'moto', peso: 20 },
  { id: 9, name: "R150 GS", model: "Adventure", price: 15000, img: '../public/img_motos/r1250.png', category: 'moto', peso: 20 },
  //Caminhões
  { id: 10, name: "Volvo Fh", model: "Cabine Globetrotter XL", price: 200000, img: '../public/img_caminhao/caminhao1.png', category: 'caminhão', peso: 500 },
  { id: 11, name: "VWCO", model: "Metor", price: 200000, img: '../public/img_caminhao/caminhao2.png', category: 'caminhão', peso: 500 },
  { id: 12, name: "Caminhão", model: "açougue", price: 200000, img: '../public/img_caminhao/caminhao3.png', category: 'caminhão', peso: 500 },
];

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<'carro' | 'moto' | 'caminhão' | 'bicicleta' |'todos'>('todos');
    const [notification, setNotification] = useState<string | null>(null);

    const toggleHandleDark = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const handlePurchase = (vehicle: Vehicle) => {
        setSelectedVehicle(vehicle);
        setShowConfirmation(true);
    };

    const handleConfirmPurchase = () => {
        setNotification(`Você comprou o veículo: ${selectedVehicle?.name}`);
        setShowConfirmation(false);
        setSelectedVehicle(null);
        setTimeout(() => setNotification(null), 6000); // mduar o tempo (agora esta 6 segundos)
    };

    const handleCancelPurchase = () => {
        setShowConfirmation(false);
        setSelectedVehicle(null);
    };

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredVehicles = vehicles.filter(vehicle =>
        (selectedCategory === 'todos' || vehicle.category === selectedCategory) &&
        (vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <div className="flex justify-center flex-col items-center h-[100vh]">
                <div className="rounded-md">
                    <div className="flex flex-row justify-center items-center bg-white dark:bg-neutral-900">
                        <h1 className="text-4xl font-bold ml-[25rem] pt-3 text-neutral-950 dark:text-neutral-50 mb-6">Concessionária</h1>
                        <div>
                        <button
                            className="dark:text-white text-neutral-900 font-medium dark:border-white border-neutral-950 border rounded-md px-4 ml-[23rem]"
                            onClick={toggleHandleDark}
                        >
                            {darkMode ? (
                                <i className="bi bi-sun-fill flex justify-center items-center gap-2 text-center">
                                    <p className="text-base font-lexend-medium">light</p>
                                </i>
                            ) : (
                                <i className="bi bi-moon-stars-fill flex justify-center items-center gap-2 text-center">
                                    <p className="text-base font-lexend-medium">dark</p>
                                </i>
                            )}
                        </button>
                        </div>
                    </div>
                    <div className="w-[70rem] h-[45rem] overflow-y-auto rounded-b-md">
                        <div className="flex flex-col items-center justify-center bg-white dark:bg-neutral-900 text-white p-4">
                            <div className="flex gap-4 mb-4">
                                <button
                                    onClick={() => setSelectedCategory('todos')}
                                    className={`px-4 py-2 border rounded ${selectedCategory === 'todos' ? 'bg-neutral-50 text-neutral-950 dark:bg-neutral-800' : 'dark:bg-neutral-800 bg-gray-300 dark:text-white hover:bg-neutral-500 hover:dark:bg-neutral-700 text-black'}`}
                                >
                                    Todos
                                </button>
                                <button
                                    onClick={() => setSelectedCategory('bicicleta')}
                                    className={`px-4 py-2 border rounded ${selectedCategory === 'bicicleta' ? 'bg-neutral-50 text-neutral-950 dark:bg-neutral-800' : 'dark:bg-neutral-800 bg-gray-300 dark:text-white hover:bg-neutral-500 hover:dark:bg-neutral-700 text-black'}`}
                                >
                                    Bicicleta
                                </button>
                                <button
                                    onClick={() => setSelectedCategory('carro')}
                                    className={`px-4 py-2 border rounded ${selectedCategory === 'carro' ? 'bg-neutral-50 text-neutral-950 dark:bg-neutral-800' : 'dark:bg-neutral-800 bg-gray-300 dark:text-white hover:bg-neutral-500 hover:dark:bg-neutral-700 text-black'}`}
                                >
                                    Carros
                                </button>
                                <button
                                    onClick={() => setSelectedCategory('moto')}
                                    className={`px-4 py-2 border rounded ${selectedCategory === 'moto' ? 'bg-neutral-50 text-neutral-950 dark:bg-neutral-800' : 'dark:bg-neutral-800 bg-gray-300 dark:text-white hover:bg-neutral-500 hover:dark:bg-neutral-700 text-black'}`}
                                >
                                    Motos
                                </button>
                                <button
                                    onClick={() => setSelectedCategory('caminhão')}
                                    className={`px-4 py-2 border rounded ${selectedCategory === 'caminhão' ? 'bg-neutral-50 text-neutral-950 dark:bg-neutral-800' : 'dark:bg-neutral-800 bg-gray-300 dark:text-white hover:bg-neutral-500 hover:dark:bg-neutral-700 text-black'}`}
                                >
                                    Caminhões
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar veículos..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full p-2 border border-gray-300 dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 rounded-md mb-4"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
                                {filteredVehicles.map((vehicle) => (
                                    <div
                                        key={vehicle.id}
                                        className="p-4 dark:bg-neutral-800 rounded border bg-neutral-100 shadow cursor-pointer hover:dark:bg-neutral-950 hover:bg-neutral-300 duration-700 dark:border-neutral-600"
                                        onClick={() => handlePurchase(vehicle)}
                                    >
                                        <h2 className="text-xl font-semibold text-neutral-950 dark:text-white">{vehicle.name}</h2>
                                        <p className="text-lg text-neutral-950 dark:text-white">Modelo: {vehicle.model}</p>
                                        <p className="text-lg text-neutral-950 dark:text-white">
                                            Preço: ${vehicle.price.toLocaleString()}
                                        </p>
                                        <p className="text-lg text-neutral-950 dark:text-white">
                                            Peso: {vehicle.peso.toLocaleString()} kg
                                        </p>
                                        <img src={vehicle.img} alt="" />
                                    </div>
                                ))}
                                {filteredVehicles.map((vehicle) => (
                                    <div
                                        key={vehicle.id}
                                        className="p-4 dark:bg-neutral-800 rounded border bg-neutral-100 shadow cursor-pointer hover:dark:bg-neutral-950 hover:bg-neutral-300 duration-700 dark:border-neutral-600"
                                        onClick={() => handlePurchase(vehicle)}
                                    >
                                        <h2 className="text-xl font-semibold text-neutral-950 dark:text-white">{vehicle.name}</h2>
                                        <p className="text-lg text-neutral-950 dark:text-white">Modelo: {vehicle.model}</p>
                                        <p className="text-lg text-neutral-950 dark:text-white">
                                            Preço: ${vehicle.price.toLocaleString()}
                                        </p>
                                        <p className="text-lg text-neutral-950 dark:text-white">
                                            Peso: {vehicle.peso.toLocaleString()} kg
                                        </p>
                                        <img src={vehicle.img} alt="" />
                                        
                                    </div>
                                ))}
                                {filteredVehicles.map((vehicle) => (
                                    <div
                                        key={vehicle.id}
                                        className="p-4 dark:bg-neutral-800 rounded border bg-neutral-100 shadow cursor-pointer hover:dark:bg-neutral-950 hover:bg-neutral-300 duration-700 dark:border-neutral-600"
                                        onClick={() => handlePurchase(vehicle)}
                                    >
                                        <h2 className="text-xl font-semibold text-neutral-950 dark:text-white">{vehicle.name}</h2>
                                        <p className="text-lg text-neutral-950 dark:text-white">Modelo: {vehicle.model}</p>
                                        <p className="text-lg text-neutral-950 dark:text-white">
                                            Preço: ${vehicle.price.toLocaleString()}
                                        </p>
                                        <p className="text-lg text-neutral-950 dark:text-white">
                                            Peso: {vehicle.peso.toLocaleString()} kg
                                        </p>
                                        <img src={vehicle.img} alt="" />
                                    </div>
                                ))}
                            </div>

                            {showConfirmation && selectedVehicle && (
                                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                                    <div className="bg-white dark:bg-neutral-950 dark:text-neutral-50 text-black p-6 rounded shadow-lg h-[35rem] w-[50rem]">
                                        <h2 className="text-3xl text-center font-bold mb-4">
                                            Confirmar Compra
                                        </h2>
                                        <p className="mb-4 py-2 gap-5 text-2xl flex justify-center flex-col items-center text-center">
                                            Você tem certeza que deseja comprar o {selectedVehicle.name}{" "}
                                            <img className='rounded-md w-[18rem]' src={selectedVehicle.img} alt="" />
                                            por ${selectedVehicle.price.toLocaleString()}?
                                        </p>
                                        <div className="flex justify-center gap-5">
                                            <button
                                                className="px-4 py-2 bg-transparent text-green-600 font-medium border border-green-800 rounded hover:bg-green-600 hover:text-white hover:border-white duration-700"
                                                onClick={handleConfirmPurchase}
                                            >
                                                Confirmar
                                            </button>
                                            <button
                                                className="px-4 py-2 bg-transparent text-red-800 font-medium border border-red-800 rounded hover:bg-red-600 hover:text-white hover:border-white duration-700"
                                                onClick={handleCancelPurchase}
                                            >
                                                Cancelar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Notificacao */}
            {notification && (
                <div className="fixed flex items-center font-medium top-4 right-4 bg-neutral-50 text-neutral-950 dark:bg-neutral-900 dark:text-white p-4 rounded-lg shadow-lg">
                    <img className='w-8 mr-2' src="../public/Animation - 1725381550013.gif" alt="" />{notification}
                </div>
            )}
        </div>
    );
};

export default App;
