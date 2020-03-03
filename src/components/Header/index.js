import React from "react";
import { Link } from "react-router-dom";

import Notifications from "../Notifications/index";

import logoPurple from "../../assets/logo-purple.svg";
import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <>
      <Container>
        <Content>
          <nav>
            <img src={logoPurple} alt="GoBarber" />
            <Link to="/deshboard">DESHBOARD</Link>
          </nav>

          <aside>
            <Notifications />

            <Profile>
              <div>
                <strong>Jakson Lima</strong>
                <Link to="/profile">Meu Perfil</Link>
              </div>
              <img
                src="https://api.adorable.io/avatars/50/abott@adorable.png"
                alt="fack"
              />
            </Profile>
          </aside>
        </Content>
      </Container>
    </>
  );
}
