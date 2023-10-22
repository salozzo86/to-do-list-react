import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { useState, useMemo } from 'react';

const ToDoItem = (props) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const isCompletedHandler = () => {
        setIsCompleted((prevState) => !prevState);
    };

    const itemStyle = useMemo(() => {
        const baseStyles =
            'my-4 flex w-80 items-center rounded px-2 py-4 text-center shadow-md';
        if (isCompleted) {
            return `${baseStyles} bg-[#E8E0F6] text-slate-400 dark:bg-[#A6BBA0] dark:text-slate-500`;
        } else {
            return `${baseStyles} bg-[#BEA7E5] dark:bg-[#5B7553] dark:text-white`;
        }
    }, [isCompleted]);

    return (
        <>
            <section className={itemStyle}>
                <li
                    className={
                        isCompleted ? 'flex-grow line-through' : 'flex-grow'
                    }
                >
                    <div className="text-base font-bold">{props.summary}</div>
                    <div className="text-sm">{props.notes}</div>
                </li>
                <FontAwesomeIcon
                    icon={faSquareCheck}
                    className="px-5"
                    onClick={isCompletedHandler}
                />
            </section>
        </>
    );
};

export default ToDoItem;
