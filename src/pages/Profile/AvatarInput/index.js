import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";

import api from "../../../services/api";
import { Container } from "./styles";

export default function AvatarInput() {
  const { defaultValue, registerField } = useField("avatar");

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file"
      });
    }
  }, [ref, registerField]);

  async function handleOnChange(e) {
    const data = new FormData();

    data.append("file", e.target.files[0]);

    const response = await api.post("files", e.target.files[0].name);

    const { id, url } = response;

    setFile(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            "https://scontent.fcac3-1.fna.fbcdn.net/v/t1.0-9/p960x960/80386294_2601296719988893_8250196507018395648_o.jpg?_nc_cat=102&_nc_sid=dd7718&_nc_ohc=K6tVcInKUn4AX8DURnb&_nc_ht=scontent.fcac3-1.fna&_nc_tp=6&oh=83d99d9bfdb75e4c315dd0ab5fb88255&oe=5E947731"
          }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleOnChange}
        />
      </label>
    </Container>
  );
}
