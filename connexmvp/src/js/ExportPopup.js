import React,  { useState, useRef } from 'react';
import "../css/ManagePopup.css";
import { Button } from 'react-bootstrap'
import { CSVLink } from 'react-csv'
import api from 'services/api'
  
const ExportPopup = (props) => {
    const [transactionData, setTransactionData] = useState([])
    const csvLink = useRef()
    const getTransactionData = async () => {
        // 'api' just wraps axios with some setting specific to our app. the important thing here is that we use .then to capture the table response data, update the state, and then once we exit that operation we're going to click on the csv download link using the ref
        await api.post('/api/get_transactions_table', { game_id: gameId })
          .then((r) => setTransactionData(r.data))
          .catch((e) => console.log(e))
        csvLink.current.link.click()

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                Contains the Export Column Elements
                <Button onClick={getTransactionData}>Download transactions to csv</Button>
                    <CSVLink
                        data={transactionData}
                        filename='transactions.csv'
                        className='hidden'
                        ref={csvLink}
                        target='_blank'
                    />
            </div>
        </div>
    );
    }
}
 
export default ExportPopup;