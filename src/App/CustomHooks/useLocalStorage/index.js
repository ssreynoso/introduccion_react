import React from "react";

const useLocalStorage = function(itemName, initialValue) {
    
    const localStorageItem = localStorage.getItem(itemName); // Valor almacenado en localStorage
    let parsedItem;

    if (!localStorageItem) {                                            // Si no hay ningún valor almacenado
        localStorage.setItem(itemName, JSON.stringify(initialValue));   // Establezco un valor por defecto en localStorage (en string)
        parsedItem = initialValue;                                      // Hago que el valor del estado inicial sea initialValue
    } else {
        parsedItem = JSON.parse(localStorageItem);                      // Parseamos valor almacenado
    }

    const [item, setItem] = React.useState(parsedItem);                 // Creo estado necesario

    const saveItem = function(newItem) {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    };

    return [ item, saveItem ];
}

export { useLocalStorage };