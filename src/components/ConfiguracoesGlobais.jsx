import { useContext } from "react"
import { ContextoRegime } from "../Contextos"
import { REGIMES_TRIBUTARIOS } from "../Constantes";
import styles from "./ConfiguracoesGlobais.css";

export const ConfiguracoesGlobais = ({ funcMudarConfigsGlobais }) => {
    const contextoRegimeTributario = useContext(ContextoRegime);
    return (
        <>    
            <h2 style={styles.h2}>{contextoRegimeTributario}</h2>
            <label htmlFor="regimes">A empresa opera em </label>
            <select name="regimes" id="regimes" onChange={(e) => funcMudarConfigsGlobais(e.target.value)}>
                <option value={REGIMES_TRIBUTARIOS.LUCRO_PRESUMIDO}>{REGIMES_TRIBUTARIOS.LUCRO_PRESUMIDO}</option>
                <option value={REGIMES_TRIBUTARIOS.LUCRO_REAL}>{REGIMES_TRIBUTARIOS.LUCRO_REAL}</option>
                <option value={REGIMES_TRIBUTARIOS.SIMPLESNACIONAL}>{REGIMES_TRIBUTARIOS.SIMPLESNACIONAL}</option>
            </select>
        </>
    );
}