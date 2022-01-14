import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Cabeca from "./cabeca";

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 420px;
height: 80vh;
border: 1px solid black; 
border-radius: 5px;
`
const Box2 = styled.p`
overflow: hidden;
width: 400px;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

function Match() {
  const [usuario, setUsuario] = useState({});
  const [listaMatch, setListaMatch] = useState({});


  const pegaFotos = async () => {
    await axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/souza/person`
      ).then((response) => {
        setUsuario(response.data.profile)
      })
      .catch((error) => {
        alert(error)
      })
  };

  useEffect(() => {
    pegaFotos();
  }, []);

  const foi = (id) => {
    const body = {
      id: usuario.id,
      choice: true
    }
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:souza/choose-person`,
      body,
      {
        headers: {
          Authorization: "souza"
        }
      }
    ).then(res => {
      setListaMatch(res.data)
      console.log(res)
    }).catch(error => {
      alert("erro")
    })
  }

  return (

    <Box>
      <Cabeca />
      <Box2>
        <img src={usuario.photo} />
      </Box2>
      <p>{usuario.bio}</p>
      <p>{usuario.name}, {usuario.age} </p>
      <button onClick={() => foi(id)}>Match</button>
      <button>Botao2</button>
    </Box>
  );
}

export default Match;