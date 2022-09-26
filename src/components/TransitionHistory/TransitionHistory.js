import { TransitionHistoryList } from "./TransitionHistoryList"
import PropTypes from "prop-types"
import { Table,TableTitle,Th} from "./TransitionHistory.styled"

export const TransitionHistory = ({ items }) => {
  return (
      
      <Table>
          <thead>
      <TableTitle>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
       
          </TableTitle>
           </thead>
        <TransitionHistoryList items={items} />
     
    </Table>
  )
}

TransitionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}
