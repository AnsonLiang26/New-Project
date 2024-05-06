// React-Router-Dom import
import { useFetcher } from "react-router-dom"
// Heroicon import
import { PlusCircleIcon } from "@heroicons/react/24/solid"
// React import
import { useEffect, useRef } from "react"
/*------------------------------------------------------*/

const AddExpenseForm = ({budgets}) => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submitting";
    const formRef = useRef()
    const focusRef = useRef()

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset()
            focusRef.current.focus()
        }
    })

    return (
        <div className="form-wrapper">
            <h2 className="h3">Add New{" "}<span className="accent">{budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
            </span>{" "}
                Expense
            </h2>
            What items are in your budget?
            <fetcher.Form method="post" className="grid-sm" ref={formRef}>
                <div className="expense-inputs">
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Expense Name</label>
                        <input type="text" name="newExpense" id="newExpense" placeholder="Enter Expense Name" ref={focusRef} autoComplete="off" required />
                    </div>
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">Enter Expense Amount</label>
                        <input type="number" step="0.01" inputMOde="decimal" name="newExpenseAmount" id="newExpenseAmount" placeholder="e.g., 3.50" required />
                    </div>
                </div>
                <div className="grid-xs" hidden={budgets.length === 1}>
                    <label htmlFor="newExpenseBudget">Current Budget</label>
                    <select name="newExpenseBudget" id="newExpenseBudget" required>
                        {
                            budgets.sort((a, b) => a.createdAt - b.createdAt).map((budget) => {
                                return (
                                    <option key={budget.id} value={budget.id}>{budget.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <input type="hidden" name="_action" value="createExpense" />
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Submitting...</span>
                        :(
                            <>
                                <span>Add Expense</span>
                                <PlusCircleIcon width={24} />
                            </>
                            
                        )
                        

                    }
                </button>
            </fetcher.Form>
        </div>
    )
}
export default AddExpenseForm