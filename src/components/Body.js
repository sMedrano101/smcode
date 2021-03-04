import React from 'react';
import "../Body.css";

function Body() {
    return (
        <div>
            <div className="body-title">
          <h1 className="body-word" >What we do</h1>
        </div>

      <div className="body-page">
        
        <div className="body-info">
            <img className="image-size" src="/images/iconfinder.png"></img>
          <h2 >Design</h2>
        <div className="body-paragraph">
          <p >Overall the users are able to review different designs.
          </p>
        </div>
        </div>

        <div className="body-info">
        <img className="image-size" src="/images/seo-marketing.png"></img>
          <h2 >Marketing SEO</h2>
          <div className="body-paragraph">
          <p >Overall the users are able to review different designs
          </p>
        </div>
        </div>
        
        <div className="body-info">
        <img className="image-size" src="/images/icon-ecom.png"></img>
          <h2>Ecommerce</h2>
          <div className="body-paragraph">
          <p >Overall the users are able to review different designs
          </p>
        </div>
        </div>
      </div>
        </div>
    )
}

export default Body
