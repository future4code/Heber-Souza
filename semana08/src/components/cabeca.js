import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;

  button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const Imagem = styled.img`
  width: 200px;
`;
const Rosto = styled.img`
  width: 35px;
`;

function Cabeca() {
  const [mudaTela, setMudaTela] = useState(false);

  return (
    <div>
      <div>
        <Imagem src="/public/img/astromatch" />
      </div>

      {mudaTela ? (
        setMudaTela(
          <Container>
            <div>
              <rosto src="/public/img/astromatch.jpeg" />
            </div>
          </Container>
        )
      ) : (
        <div>
          <rosto src="/publi/img/rosto.jpeg" />
        </div>
      )}
    </div>
  );
}

export default Cabeca;