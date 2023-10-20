import React from "react";
import MenuComponent from "./MenuComponent"

const HeaderComponent = () => {

    return(
        <React.Fragment>
            <h2>Employee Management</h2>
            <MenuComponent></MenuComponent>
        </React.Fragment>
    )

}

export default HeaderComponent;