import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

export default function CreateModal({ onClose }) {
  const [cardType, setCardType] = useState('');
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState(['']);
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  // Validation
  const isFormValid = () => {
    if (!header || !description) return false;

    if (cardType === 'Image Card' && !image) return false;
    if (cardType === 'Checkbox Card' && options.some(opt => !opt)) return false;

    return true;
  };

  const buttonClass = isFormValid()
    ? 'mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700'
    : 'mt-4 w-full bg-gray-700 text-white py-2 rounded-full cursor-not-allowed';

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-20">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Create New Cart</h2>

        <div className="space-y-4">
          <select
            className="w-full border px-3 py-2 rounded"
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
          >
            <option>Select type of card</option>
            <option>Default Card</option>
            <option>Image Card</option>
            <option>Checkbox Card</option>
          </select>

          <input
            type="text"
            placeholder="Header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />

          {cardType === 'Image Card' && (
            <div className="w-full border-2 border-dashed border-blue-400 p-4 rounded text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer text-blue-500">
                {image ? image.name : 'Click to upload or drag and drop'}
              </label>
              <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or GIF</p>
            </div>
          )}

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded h-24"
          ></textarea>

          {cardType === 'Checkbox Card' && (
            <div className="space-y-2">
              {options.map((opt, index) => (
                
                <>
                <label htmlFor="options">Add Option</label>
                <input
                  key={index}
                  type="text"
                  placeholder="Text Placeholder"
                  value={opt}
                  onChange={(e) => {
                    const updatedOptions = [...options];
                    updatedOptions[index] = e.target.value;
                    setOptions(updatedOptions);
                  }}
                  className="w-full border px-3 py-2 rounded"
                />
                </>
              ))}
              <button
                onClick={handleAddOption}
                className="w-full bg-green-500 text-white py-2 rounded-full flex justify-center items-center gap-2 hover:bg-green-600"
              >
                <Plus size={16} /> Add option
              </button>
            </div>
          )}
        </div>

        <button className={buttonClass} disabled={!isFormValid()}>
          Create
        </button>
      </div>
    </div>
  );
}