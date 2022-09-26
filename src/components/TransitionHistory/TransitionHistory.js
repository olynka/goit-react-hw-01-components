import { TransitionHistoryList } from "./TransitionHistoryList"
import { Table,Th,TableTitle }from "components/TransitionHistory/TransitionHistory.styled"
import PropTypes from "prop-types"

export const TransitionHistory = ({ items }) => {
    return (
<Table >
    <TableTitle>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
        </TableTitle>   
        
 <TransitionHistoryList items={items} />;
 
</Table>
    )
        
}
 
TransitionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}
