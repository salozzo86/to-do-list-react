import { useState } from 'react';
import Button from '../UI/Button';
import { useRef } from 'react';

const NewToDoForm = (props) => {
    const summaryInput = useRef();
    const notesInput = useRef();

    const [isValid, setIsValid] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredSummary = summaryInput.current.value;
        const enteredNotes = notesInput.current.value;

        if (enteredSummary === '') {
            setIsValid(false);
            return;
        }

        const inputData = {
            summary: enteredSummary,
            notes: enteredNotes,
            id: Math.floor(Math.random() * 10000),
        };
        props.onFormSubmit(inputData);
        summaryInput.current.value = '';
        notesInput.current.value = '';
        setIsValid(true);
    };
    return (
        <div className="w-full max-w-xs">
            <form className="rounded bg-[#BEA7E5] px-8 pb-4 pt-6 shadow-md dark:bg-[#5B7553]">
                <div className="pb-4">
                    <label
                        className="block pb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="summary"
                    >
                        Summary
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="summary"
                        type="text"
                        ref={summaryInput}
                    ></input>
                </div>
                <div className="pb-4">
                    <label
                        className="block pb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="notes"
                    >
                        Notes:
                    </label>
                    <textarea
                        className="focus:shadow-outline h-20 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="notes"
                        type="text"
                        ref={notesInput}
                    ></textarea>
                </div>
                <Button
                    children={'Add'}
                    type={'submit'}
                    onClick={submitHandler}
                />
                {!isValid && (
                    <div className="mt-1 rounded bg-red-100 py-1 text-sm font-bold dark:bg-[#5B7553] dark:text-white">
                        Invalid input. You need at least a summary.
                    </div>
                )}
            </form>
        </div>
    );
};

export default NewToDoForm;
