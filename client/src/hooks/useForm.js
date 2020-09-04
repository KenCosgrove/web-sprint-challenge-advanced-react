// write your custom hook here to control your checkout form
import {useState, useEffect} from 'react'


export const useForm = (initialData) => {

  const [values, setValues] = useState(initialData)

  /*   const clearForm = e => {
        e.preventDefault();
        setValues(initialValues);
      }; */

    const handleChanges = evt => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)



    return (
        [handleChanges, values, /* clearForm */ showSuccessMessage, setShowSuccessMessage]
    )
}

