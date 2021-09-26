import { useContext } from "react";
import { AuthContext } from "./authprovider";

export default function useAuth() {
    const contextValue = useContext(AuthContext);
    return contextValue;
}