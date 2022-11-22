import SelectionHistory from '../../components/PayComponents/SelectionHistory.jsx'
import { useParams } from 'react-router-dom'
const Pay =() => {
    const {paymentId} = useParams();
    return <SelectionHistory />
}

export default Pay