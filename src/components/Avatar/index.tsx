import { useEffect, useState } from "react";
import { User } from "../../types/user";

function Avatar(){
    const [user, setUser] = useState<User>()

    useEffect(() => {
        async function carregarUser(){
            const resposta = await fetch("https://api.github.com/users/rickalves");
            const usuario = await resposta.json();
            setUser(usuario);
        }

        carregarUser();
    }, [])
    
    return(
        <>
            <div className="avatar">
                <img src={user?.avatar_url} alt="avatar" />
            </div>
            <h3>{user?.name}</h3>
        </>
    );
}

export default Avatar;