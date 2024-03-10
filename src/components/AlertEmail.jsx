import { TEAlert } from "tw-elements-react";

function AlertEmail() {
    return (
        <div className="p-10">
            <TEAlert
                dismiss
                staticAlert
                open={true}
                color="bg-success-400 text-success-800"
            >
                <strong>SENT SUCCESSFULLY !</strong>
                <span className="ml-1">
                Thank you for your interest, your query was sent successfully. During the next few hours you will be contacted via email or the method detailed in the query.
                </span>
            </TEAlert>
        </div>
    );
}

export default AlertEmail;
