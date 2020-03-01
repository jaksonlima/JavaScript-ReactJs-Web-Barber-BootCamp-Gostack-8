import React from "react";
import { Link } from "react-router-dom";

import { Container, Content, Profile } from "./styles";
import logoPurple from "../../assets/logo-purple.svg";

export default function Header() {
  return (
    <>
      <Container>
        <Content>
          <nav>
            <img src={logoPurple} alt="GoBarber" />
            <Link to="/dashboard">DASHBOARD</Link>
          </nav>

          <aside>
            <Profile>
              <div>
                <strong>Diego Fernandes</strong>
              </div>
              <Link to="/profile">Meu Perfil</Link>
              <img
                src="https://api.adorable.io/avatars/50/abott@adorable.png"
                alt="Jakson Lim"
              />
            </Profile>
          </aside>
        </Content>
      </Container>
    </>
  );
}
