import React , { createContext, useState} from 'react';

export const FreelancerContext = createContext();

export function FreelancerProvider({children}) {

const [freelancer,setfreelancer] = useState(null);


const contextValue = [freelancer,setfreelancer]

    return(
        <FreelancerContext.Provider value={[freelancer,setfreelancer]}>
            {children}

        </FreelancerContext.Provider>
    )
}

export const FreelancerConsumer = FreelancerContext.Consumer;


