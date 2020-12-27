import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
 display:grid;
 place-items:center;
 height: 100vh;
 width: 100vw;
 
 .box{
   border: var(--border);
   padding: 40px;
   min-height: calc(100vh - 30%);
   min-width: calc(100vw - 60%);
   border-radius: var(--border-radius);
   position: relative;
 }
`
export const Layout = ({children}) =>{
    return (
        <Container>
            <div className='box'>
                {children}
            </div>
        </Container>
    )
}  