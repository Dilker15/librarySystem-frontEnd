import { useState } from 'react';



export function useFormHook(initialData) {
    const [currentData, setCurrentData] = useState({ ...initialData });

    const updateData = (name, value) => {
        setCurrentData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const clearData = () => {
        setCurrentData({ ...initialData });
    };

    return {
        currentData,
        updateData,
        clearData,
    };
}
