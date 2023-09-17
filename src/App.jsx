import { ContextoRegime } from "./Contextos";
import { REGIMES_TRIBUTARIOS } from "./Constantes";
import { useState } from "react";
import { ConfiguracoesGlobais } from "./components/ConfiguracoesGlobais";

export default function App() {
  const [regimeTributario, setRegimeTributario] = useState(REGIMES_TRIBUTARIOS.LUCRO_PRESUMIDO);

  function alterarRegimeTributario(novoRegimeTributario) {
    setRegimeTributario(novoRegimeTributario);
  }
  return (
    <ContextoRegime.Provider value={regimeTributario}>
      <h2>Meu site incrível</h2>
      <ConfiguracoesGlobais funcMudarConfigsGlobais={alterarRegimeTributario}/>
    </ContextoRegime.Provider>
  );
}
