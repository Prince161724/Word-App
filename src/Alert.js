import React from 'react';

function Alert(props) {
    return (
        <>
            {props.Alert && (
                <div className={`alert alert-${props.Alert.type ? props.Alert.type : 'null'} alert-dismissible fade show`} role="alert">
                    <strong>{props.Alert.msg ? props.Alert.msg : 'null'}</strong>
                </div>
            )}
        </>
    );
}

export default Alert;
