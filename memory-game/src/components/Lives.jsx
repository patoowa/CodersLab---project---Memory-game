import React from 'react'; 


const Lives = ({lives, gameOver}) => {
    
    const renderLives = () => {
        const liveIcons = [];
        for (let i=0; i < lives; i++) {
            liveIcons.push(<img key={i} src='/public/img/heart-rate.png' className="life-icon" role="img" />)
        }
    return liveIcons;
    }
    
        


return (
    <div className="lives-ui">
        <p>Lives:</p>
        <div className="life-icons">
            {gameOver ? null : renderLives()}
        </div>
    </div>
)
}

export default Lives;