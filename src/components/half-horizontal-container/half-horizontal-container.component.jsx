import './half-horizontal-container.styles.scss'

const HalfHorizontalContainer = ({ id, classNameClassifiers, text }) => {
    const { titleBranch, titleSub1, titleSub2, titleSub3 } = text;
    const { large, small1, small2, small3 } = classNameClassifiers;

    return (
    <div key="id" className="half-horizontal-container">
        <div className={`gr-large-half-width-container ${large}`}>
            <div className="gr-large-half-width-container-text main-content">
            <h1>{titleBranch}</h1>
            </div>
        </div>
        <div className="gr-small-half-width-container">
            <div className={`gr-small-half-width-third ${large} ${small1}`}>
                <div className="gr-small-half-width-third-text">
                    <h1>{titleSub1}</h1>
                </div>
            </div>
            <div className={`gr-small-half-width-third ${large} ${small2}`}>
                <div className="gr-small-half-width-third-text">
                    <h1>{titleSub2}</h1>
                </div>
            </div>
            <div className={`gr-small-half-width-third ${large} ${small3}`}>
                <div className="gr-small-half-width-third-text">
                    <h1>{titleSub3}</h1>
                </div>
            </div>
        </div>
    </div>
    )
  };

export default HalfHorizontalContainer;