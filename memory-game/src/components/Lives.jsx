import React from 'react'; 


const Lives = ({lives}) => {
    const lifeIcons = [];

    for (let i=0; i <= lives; i++) {
        lifeIcons.push(<img key={i} src='/public/img/heart-rate.png' className="life-icon" role="img" />)
        
        
    }


return (
    <div className="lives-ui">
        <p>Lives:</p>
        <div className="life-icons">
            {lifeIcons}
        </div>
    </div>
)
}

export default Lives;