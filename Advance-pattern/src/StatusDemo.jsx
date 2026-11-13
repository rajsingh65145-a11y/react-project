import { useState } from 'react'

const StatusDemo = () => {
    const [status, setStatus] = useState("loading");   // "loading", "error", "success"
    
    const renderStatus = () => {
        if (status === "loading") {
            return <p>Loading...</p>;
        }
        if (status === "error") {
            return <p>Something went wrong!</p>;
        }
        if (status === "success") {
            return <p>Data loaded successfully!</p>;
        }
    }
    
    return (
        <div>
            {renderStatus()}
            <button onClick={() => setStatus("loading")}>Loading</button>
            <button onClick={() => setStatus("error")}>Error</button>
            <button onClick={() => setStatus("success")}>Success</button>
        </div>
    );
}

export default StatusDemo