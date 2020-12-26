import React from 'react';
import {BsStar} from 'react-icons/bs'
import { BsStarFill } from "react-icons/bs";
import { Button } from './style';


export const FavoriteButton = ({like, onClick}) =>{
    return (
      <Button type="button" onClick={onClick}>
        {like ? <BsStarFill /> : <BsStar />}
      </Button>
    );
}