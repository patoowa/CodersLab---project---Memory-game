import React from 'react'; 

const Lives = ({lives}) => {
    const lifeIcons = [];

    for (let i=0; i < lives; i++) {
        lifeIcons.push(<span key={i} className="life-icon" role="img">❤️</span>)
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