import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const ToDoItem = (props) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const isCompletedHandler = () => {
        if (!isCompleted) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };

    return (
        <>
            {!isCompleted && (
                <section className="my-4 flex w-80 items-center rounded bg-[#BEA7E5] px-2 py-4 text-center shadow-md dark:bg-[#5B7553] dark:text-white">
                    <li className="flex-grow">
                        <div className="text-base font-bold">
                            {props.summary}
                        </div>
                        <div className="text-sm">{props.notes}</div>
                    </li>
                    <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="px-5"
                        onClick={isCompletedHandler}
                    />
                </section>
            )}
            {isCompleted && (
                <section className="my-4 flex w-80 items-center rounded bg-[#E8E0F6] px-2 py-4 text-center text-slate-400 shadow-md dark:bg-[#A6BBA0] dark:text-slate-500">
                    <li className="flex-grow">
                        <div className="text-base font-bold line-through">
                            {props.summary}
                        </div>
                        <div className="text-sm line-through">
                            {props.notes}
                        </div>
                    </li>
                    <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="px-5"
                        onClick={isCompletedHandler}
                    />
                </section>
            )}
        </>
    );
};

export default ToDoItem;
