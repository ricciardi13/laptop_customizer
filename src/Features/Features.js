import React from 'react';
import Feature from '../Feature/Feature';

function Features(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        
        const options = props.features[feature].map(item => {
          
        });
  
        return (
          <Feature 
          index={idx} 
          feature={feature} 
          features={props.features} 
          selected={props.selected}
          USCurrencyFormat={props.USCurrencyFormat}
          updateFeature={props.updateFeature}
          />           
        );
      });
    return (
        <div>
            {features}
        </div>
    );  
}

export default Features;