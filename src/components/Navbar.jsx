import React, { useState } from 'react';
import { Filter, Plus } from 'lucide-react';
import CreateModal from './modals/CreateModal';

function Navbar() {
  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState(['Type 1', 'Type 3']);

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleAll = () => {
    if (selectedTypes.length === 3) {
      setSelectedTypes([]);
    } else {
      setSelectedTypes(['Type 1', 'Type 2', 'Type 3']);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm relative">
      <h1 className="font-semibold">Title</h1>

      <div className="flex items-center space-x-3">
        {/* Filter Button */}
        <div className="relative">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center space-x-1 bg-black text-white px-4 py-2 rounded-full text-sm"
          >
            <Filter size={16} />
            <span>Filter</span>
          </button>

          {/* Dropdown */}
          {showFilter && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow p-2 z-10 space-y-1">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTypes.length === 3}
                  onChange={toggleAll}
                />
                <span>All</span>
              </label>
              {['Type 1', 'Type 2', 'Type 3'].map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Add New Button */}
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
        >
          <Plus size={16} className="mr-1" />
          Add New
        </button>
      </div>

      {/* Modal from another component */}
      {showModal && <CreateModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Navbar;