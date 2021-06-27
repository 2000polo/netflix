import { createContext,useState } from "react";

export const viewContext = createContext(null);

function Viewmovie ({children}){

    const [current, setCurrent] = useState(null)
    return(
        <viewContext.Provider value={{current, setCurrent}}>
            {children}
            
        </viewContext.Provider>
    )
}

export default Viewmovie;