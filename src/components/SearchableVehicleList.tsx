import React, { useState } from 'react';
import { Vehicle } from '../types/types';

interface SearchableVehicleListProps {
    vehicles: Vehicle[];
}

const SearchableVehicleList: React.FC<SearchableVehicleListProps> = ({ vehicles }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const filteredVehicles = vehicles.filter(vehicle =>
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Buscar veículos..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredVehicles.map((vehicle) => (
                    <div
                        key={vehicle.id}
                        className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
                    >
                        <img 
                            src={vehicle.img} 
                            alt={vehicle.name} 
                            className="w-full h-48 object-cover" 
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{vehicle.name}</h2>
                            <p className="text-gray-400 mb-2">Modelo: {vehicle.model}</p>
                            <p className="text-lg font-semibold">Preço: ${vehicle.price.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchableVehicleList;
