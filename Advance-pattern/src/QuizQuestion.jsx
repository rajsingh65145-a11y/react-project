// QuizQuestion.jsx
import Card from './Card'

const QuizQuestion = ({ question, options }) => {
    return (
        <Card>
            <h3>{question}</h3>
            {options.map((opt, index) => (
                <button key={index}>{opt}</button>
            ))}
        </Card>
    );
}

export default QuizQuestion