import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
 display:grid;
 place-items:center;
 height: 100vh;
 width: 100vw;
 
 .box{
   border: var(--border);
   border-radius: var(--border-radius);
   padding: 40px;
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