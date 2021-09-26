import { useContext } from "react";
import { FreelancerContext } from "./freelancersprovider";

export default function useFreelancer() {
    const contextValue = useContext(FreelancerContext);
    return contextValue;
}