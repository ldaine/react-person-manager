import React from 'react'; 

class ErrorBoundary extends React.Component {
    state = {
        hasError:false,  
        errorMessage: ''
    }

    componentDidCatch = (error:any, info:any) => {
        this.setState({
            hasError:true, 
            errorMessage: error
        })
    }

    render() {
        if(this.state.hasError){
            return <h1>Something went wrong:</h1>; 
        } else {
            return this.props.children; 
        }
    }
}

export default ErrorBoundary; 