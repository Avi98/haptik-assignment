import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

import { Button } from "./style";

export const DeleteButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <RiDeleteBin7Line />
    </Button>
  );
};
