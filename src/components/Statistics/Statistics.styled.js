import styled from "styled-components"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

export const Title = styled.h2`
margin-left:100px;
color:mediumvioletred;
 

`
export const StatSection = styled.section`
width:350px;
height:200px;
box-shadow: 0 1px 2px #cccccc, inset 0 1px 0 #ffffff;
display:block;
align-items:center;
margin:auto;
  background-color:plum;
border-radius: 5px;

`
export const Item  = styled.li`
 display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 6px;
 background-color:${getRandomHexColor};
  border-radius: 4px;

 `
 export const Span  = styled.span`
color:blek;
 `
export const Percentage  = styled.span`
color: black;
 `
  export const Statslist  = styled.ul`
display:flex;
list-style: none;
justify-content:center;
padding:10px;
 `


