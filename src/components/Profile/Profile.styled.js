
import styled from "styled-components"

export const Avatar = styled.img`

  width: 110px;
  height: 110px;
 margin-left:120px;
margin-top:20px;

`
export const Desc = styled.div`
 width: 350px;
 display: block; 
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
 box-shadow: 0 1px 2px #cccccc, inset 0 1px 0 #ffffff;
  background-color:plum;
  border-radius:4px; 
  margin-bottom:20px;
`
export const Name = styled.p`
  color: #000;
  font-size: 20px;
  margin:0px;
 align-items:center;
 text-align:center;
`
export const Tag = styled.p`
  color: #777;
  font-size: 13px;
   text-align:center;
`
export const Location = styled.p`
  color: #777;
  font-size: 16px;
 text-align:center;
`

export const Stats = styled.ul`
display: flex;
 list-style: none;
  padding: 4px;
justify-content:center;
`
export const InfoStat = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 16px;
  background-color:pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-left:5px;
`
export const Label = styled.span`
   font-size: 16px;
  color: purple;
`
export const Quantity = styled.span`
 font-size:15px;
 color: purple;

`