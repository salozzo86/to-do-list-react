import { useCallback, useState } from 'react';
import './App.css';
import Header from './components/UI/Header';
import NewToDoForm from './components/newtodos/NewToDoForm';
import Todos from './components/todos/Todos';

function App() {
    const [toDos, setToDos] = useState([]);

    const toDoChangeHandler = useCallback((inputData) => {
        setToDos((prevState) => {
            return [inputData, ...prevState];
        });
    }, []);

    return (
        <>
            <Header>What to do...</Header>
            <section className="flex flex-col items-center justify-center py-5 font-['Play']">
                <NewToDoForm onFormSubmit={toDoChangeHandler} />
                <Todos todos={toDos} />
            </section>
        </>
    );
}

export default App;
