import cs from './CostHistory.module.css';
import React from "react";

export const OutcomeHistory = ({
                                   expensesList
                               }) => {

    return (
        <div className={cs.OutcomeHistory}>
            <div className={cs.OutcomeList}>
                <span className={cs.outcomeTitle}>All Expenses:</span>
                {
                    expensesList.map((item) => (
                            <div className={cs.OutcomeRecord}>
                                <div className={cs.incomeOutcomeRecordDate}>
                                    <span>{item.date}</span>
                                </div>
                                <hr/>
                                <div className={cs.OutcomeRecordContent}>
                                    <div className={cs.incomeAndAccountTitle}>
                                                <span className={cs.incomeTitle}>{
                                                    item.category !== null ?
                                                        item.category.title
                                                        :
                                                        null
                                                }</span> <br/>
                                        <span className={cs.accountTitle}>{
                                            item.account !== null ?
                                                item.account.title
                                                :
                                                null}
                                                    </span>
                                    </div>
                                    <div className={cs.expenseRecordSum}>
                                        <span>- {item.sum} тг</span>
                                    </div>
                                </div>
                            </div>
                        )
                    )

                }
            </div>
        </div>
    );
};