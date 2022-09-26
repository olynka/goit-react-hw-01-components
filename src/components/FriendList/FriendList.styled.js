import styled from "styled-components"

export const ItemFriends = styled.li`
display:flex;
 margin-top: 15px ;
 margin-right:0;
background-color:pink;
border-radius:5px;
width:200px;
padding: 16px 24px;
align-items: center;

`
export const StatusFriends = styled.span`
width:20px;
height:20px;
  border-radius: 50%;
  margin-right: 10px;
   background-color:${(props) => (props.status ? 'red ' : 'green')};
margin:  10px;


`
export const AvatarFriends = styled.img`
margin-right:15px;

`
export const SectionFriend = styled.section`
width: 350px;
height:570px;
 box-shadow: 0 1px 2px #cccccc, inset 0 1px 0 #ffffff;
  background-color:#fff;
margin:auto;
padding:auto;
  `
export const NameFriend = styled.p`
font-size:20px;

`
export const ListFriend = styled.ul`
 list-style: none;
 display: flex;
  flex-direction: column;
  align-items: center;
padding:0;
`