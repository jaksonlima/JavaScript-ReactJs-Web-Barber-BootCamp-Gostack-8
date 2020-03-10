import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
                src="https://scontent.fcac3-1.fna.fbcdn.net/v/t1.0-9/p960x960/80386294_2601296719988893_8250196507018395648_o.jpg?_nc_cat=102&_nc_sid=dd7718&_nc_ohc=K6tVcInKUn4AX8DURnb&_nc_ht=scontent.fcac3-1.fna&_nc_tp=6&oh=83d99d9bfdb75e4c315dd0ab5fb88255&oe=5E947731"
                alt="fack"
              />
            </Profile>
          </aside>
        </Content>
      </Container>
    </>
  );
}
