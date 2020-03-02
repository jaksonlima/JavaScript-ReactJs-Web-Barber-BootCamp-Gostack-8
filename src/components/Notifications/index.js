import React from "react";
import { MdNotifications } from "react-icons/md";

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification
} from "./styles";

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7158c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Voce possui um novo agendamento para amanha</p>
            <time>ha 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Voce possui um novo agendamento para amanha</p>
            <time>ha 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Voce possui um novo agendamento para amanha</p>
            <time>ha 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Voce possui um novo agendamento para amanha</p>
            <time>ha 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Voce possui um novo agendamento para amanha</p>
            <time>ha 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
