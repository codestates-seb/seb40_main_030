import { useParams } from 'react-router-dom'
import SelectionHistory from '@/components/PayComponents/SelectionHistory';

const Payments = () => {
    const {batteryId} = useParams();

    return <SelectionHistory />
}

export default Payments