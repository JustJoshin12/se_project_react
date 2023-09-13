import "../AddItemModal/AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function AddItemModal({onClose, onAddItem, isOpen}) {
  const [name, setName] = useState("")
  const [link, setUrl] = useState("")
  const [weatherType, setWeatherType] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  
  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value)
    console.log(weatherType)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, weatherType })
  }
  return (
    <ModalWithForm title="New Garment" onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit}>
      <div className="modal__form-contents">
        <label>
          <p className="modal__input-title">Name</p>
          <input
            className="modal__input"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          <p className="modal__input-title">Image</p>
          <input
            className="modal__input"
            type="url"
            name="link"
            minLength="1"
            maxLength="30"
            placeholder="Image URL"
            value={link}
            onChange={handleUrlChange}
          />
        </label>
        <p className="modal__weather-section">Select the weather type:</p>
        <div className="modal__radio-options">
          <div className="modal__radio-option">
            <input
              className="modal__radio-button"
              name="weatherType"
              type="radio"
              id="hot"
              value="hot"
              onChange={handleWeatherTypeChange}
            />
            <label className="modal__weather-type"> Hot</label>
          </div>
          <div className="modal__radio-option">
            <input
              className="modal__radio-button"
              name="weatherType"
              type="radio"
              id="warm"
              value="warm"
              onChange={handleWeatherTypeChange}
            />
            <label className="modal__weather-type"> Warm </label>
          </div>
          <div className="modal__radio-option">
            <input
              className="modal__radio-button"
              name="weatherType"
              type="radio"
              id="cold"
              value="cold"
              onChange={handleWeatherTypeChange}
            />
            <label className="modal__weather-type"> Cold </label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;
