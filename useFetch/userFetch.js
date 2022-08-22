import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    console.log("url:",url);

    const [ state, setState ] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    }); 

    const getFetch = async () => {

        //...si vuelvo a cargar por las dudas indico
        //...que estoy cargando
        setState({
            ...state,
            isLoading:true,
        }); 

        console.log("Paso 1");
        const resp = await fetch(url);
        const data = await resp.json();
        console.log("Paso 2");

        //...actualizo mi estado
        setState({
            data:data,
            isLoading:false,
            hasError:null,
        })

    }

    useEffect(()=>{
        console.log("se disparo el useEffect x cambio en url");
        getFetch();
    }, [url]);

    return {
        data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError,
        getFetch,
    }; 

}