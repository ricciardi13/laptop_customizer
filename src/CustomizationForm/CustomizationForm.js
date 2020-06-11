import React from "react";
import Features from "../Features/Features";

function CustomizationForm(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>   
            <Features 
                features={props.features}
                selected={props.selected}
                USCurrencyFormat={props.USCurrencyFormat}
                updateFeature={props.updateFeature}
            />  
        </form>
    );

}

export default CustomizationForm;