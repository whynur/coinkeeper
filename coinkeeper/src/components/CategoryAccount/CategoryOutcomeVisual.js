import * as React from 'react';
import cs from "./CategoryAccount.module.css";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";

export const CategoryOutcomeVisual = ({categoryOutcomePercentage, canSpendSum}) => {

    return (
        <div className={cs.incomeOutcomeVisual}>
            <div className={cs.outcomeBlock}>
                <span className={cs.title}>Расходы</span>
                <CircleProgressBar percentage={categoryOutcomePercentage}/>
                <div className={cs.needToEarn}>
                    {canSpendSum} тг
                </div>
            </div>
            <div className={cs.changeButton}>
                <button>Изменить</button>
            </div>
        </div>
    );
};