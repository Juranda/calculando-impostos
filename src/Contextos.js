import { createContext } from "react";
import { REGIMES_TRIBUTARIOS } from "./CONSTANTES.JS";

export const ContextoRegime = createContext(REGIMES_TRIBUTARIOS.LUCRO_REAL);