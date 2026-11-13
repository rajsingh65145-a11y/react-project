// App.jsx
import ErrorBoundary from './ErrorBoundary'
import QuizQuestion from './QuizQuestion'

const App = () => {
    return (
        <ErrorBoundary>
            <QuizQuestion 
                question="What is 2+2?" 
                options={["3", "4", "5"]} 
            />
        </ErrorBoundary>
    );
}

export default App