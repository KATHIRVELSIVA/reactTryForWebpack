import React from "react";
import ReactDOM from "react-dom";
import MyHeader1 from "./title.js";
class MyHeader extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h1>It is a 1 style!</h1>
                    <MyHeader1 />
                </div>
            </>
        );
    }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));