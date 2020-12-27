import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

import { Button } from "./style";

export const DeleteButton = ({ onClick, ...rest }) => {
  return (
    <Button onClick={onClick} {...rest}>
      <RiDeleteBin7Line />
    </Button>
  );
};
