
function LoadingBar({ next }) {

    return (
        <div className="loading-bar-container">
            <div className="loading-bar" id="loading-bar" style={{ width: `${next}0%` }}></div>
        </div>
    );
}

export default LoadingBar;
