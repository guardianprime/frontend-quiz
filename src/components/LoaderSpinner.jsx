function LoaderSpinner({isDark}){
    
    return(
        <div className="loader-container" data-theme={isDark? "dark": "light"}><span className="loader"></span></div>
    )
}

export default LoaderSpinner;