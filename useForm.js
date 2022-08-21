import { useState } from "react"

export const useForm = ( initialForm = {} ) => {

    //console.log(initialForm); 

    const [formState, setFormState ] = useState(initialForm);

    //console.log("desde el form:",formState); 

    const onInputChange = (event) => {
        const { name, value } = event.target; 
        setFormState( {
            ...formState,
            [ name ]: value,
            [ email ]: value
        });

    console.log("Desde el form, lo que regreso:",formState);
    console.log("Desde el form, lo que regreso:",name);
    
    }

    const onResetForm = (  ) => {
        setFormState( initialForm );
    }

    return ({
        name,
        email,
        formState: formState,
        onInputChange,
        onResetForm,
    })
}