
import {   useMemo, useState } from "react"
//import Child from "./Child"

const App = () => {

const [expenses, setExpenses] = useState([
        { title: "Food", amount: 500 },  
        { title: "Rent", amount: 5000 }
    ]);
    const [darkMode, setDarkMode] = useState(false);
    
    const total = useMemo(() => {
        console.log("Calculating total...");
        return expenses.reduce((acc, exp) => acc + exp.amount, 0);
    }, [expenses]);   // sirf "expenses" badlने pe recalculate
    
    return (
        <div>
            <p>Total: {total}</p>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
            <button onClick={() => {
    setExpenses([
        ...expenses,
        { title: "Travel", amount: 1000 }
    ]);
}}>
    Add Expense
</button>
        </div>
    );










  
/*
  const [count, setcount] = useState(0);


  const slowcalculation = () => {
    console.log("slow calculation");

    let sum=0;

    for(let i=0;i<=1000000;i++){
      sum+=i;
    }
    return sum;
  }
  const result = useMemo(() => {
    return slowcalculation();
  }, []);   // khaali array — kabhi dobara nahi chalegа (koi dependency hi nahi)

 

const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setcount(count + 1)}>
        Increase Count
      </button>
    <Child name="Harsh" />
  
    </div>
  )*/
}

export default App
