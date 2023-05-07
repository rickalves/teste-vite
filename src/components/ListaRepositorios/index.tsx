import { useEffect, useState } from "react";
import { IRepo } from "../../types/repo";


function ListaDeRepositorios() {
  const [repositorio, setRepositorio] = useState<IRepo[]>();


  useEffect(() => {
    async function carregaRepositorios () {
      const resposta = await fetch('https://api.github.com/users/rickalves/repos');
      const repositorios = await resposta.json();
      setRepositorio(repositorios);
    }
    
    carregaRepositorios();
  }, []);

  return (
    <>
      <h2>Meus Repositorios no Github</h2>
      <ul>
        {repositorio?.map(repo => {
          return(
            <li key={repo.id}>
                <strong>{repo.name}:</strong> <a href={repo.html_url} target="_blank">[{repo.html_url}]</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ListaDeRepositorios;