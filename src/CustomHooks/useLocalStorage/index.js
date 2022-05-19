import React from "react";

const useLocalStorage = function(itemName, initialValue, setLoading, setError) {

    const [item,    setItem] = React.useState(initialValue);          // TODO's
    
    React.useEffect( () => {
        
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName); // Obtengo los TODO's almacenados en localStorage
                let parsedItem;

                if (!localStorageItem) {                                            // Si no hay ningún valor almacenado
                    localStorage.setItem(itemName, JSON.stringify(initialValue));   // Establezco un valor por defecto en localStorage (en string)
                    parsedItem = initialValue;                                      // Hago que el valor del estado inicial sea initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem);                      // Parseamos valor almacenado
                }

                setItem(parsedItem);
                setLoading(false);

            } catch (error) {
                setError(error);
            }
        }, 2000);

    });

    const saveItem = function(newItem) {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    return { item, saveItem };
}

export { useLocalStorage };