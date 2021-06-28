import { useState, createContext} from 'react';

export const Utube = createContext(null);

function UtubeVideo ({children}){
    const [utube, setUtube] = useState(null)

    return(
        <Utube.Provider value={{utube, setUtube}} >
            {children}
        </Utube.Provider>
    )
}

export default UtubeVideo;