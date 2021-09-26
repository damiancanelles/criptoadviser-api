import React , {createContext, useState} from 'react';

export const AuthContext = createContext();

export function AuthProvider({children}) {

const [user,setuser] = useState({
    token: sessionStorage.getItem('token'),
    name: sessionStorage.getItem('name'),
    subscription: sessionStorage.getItem('subscription'),
    userid: sessionStorage.getItem('userid'),
    role: sessionStorage.getItem('role'),
    telegramuser: sessionStorage.getItem('telegramuser'),
});



    return(
        <AuthContext.Provider value={[user,setuser]}>
            {children}

        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer;


