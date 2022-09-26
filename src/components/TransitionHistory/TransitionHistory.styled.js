import styled from "styled-components"

export const Table = styled.table`
    display: table;
    margin-left: auto;
    margin-right: auto;
   width: 600px;

  border: 3px solid purple;
  align-items:center; 
`
export const Th = styled.th`
   border-bottom: 1px solid #706d97;
    


`
export const TableTitle = styled.tr`

    color: #fff;
    background-color: #706d97;

`
export const TableRow = styled.tr`
   :nth-child(odd) {
    background-color: #eee;
}
    color: #696969;
    border-bottom: 1px solid #706d97;
`
