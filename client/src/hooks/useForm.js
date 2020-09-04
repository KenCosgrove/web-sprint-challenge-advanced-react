// write your custom hook here to control your checkout form
import {useState} from 'react'
 
export const useForm = (key, initialValue = '') => {

    const [storedValue, setStoredValue] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))) {
            return JSON.parse(window.localStorage.getItem(key));
          } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
          }
        });

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
 
    return [storedValue, setValue];

}

