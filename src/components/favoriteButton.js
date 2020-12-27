import React from 'react';
import {BsStar} from 'react-icons/bs'
import { BsStarFill } from "react-icons/bs";
import { Button } from './style';


export const FavoriteButton = ({like,id, ...rest}) =>{
    return (
      <Button type="button" id={id} {...rest}>
        {like ? <BsStarFill id={id}/> : <BsStar id={id}/>}
      </Button>
    );
}