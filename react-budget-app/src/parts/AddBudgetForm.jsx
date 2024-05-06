// React-Router-Dom import
import { Form, useFetcher } from "react-router-dom"
// Heroicon import
import { PlusCircleIcon } from "@heroicons/react/24/solid"
// React import
import { useEffect, useRef } from "react";
/*------------------------------------------------------*/

const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting"

    const formRef = useRef();
    const focusRef = useRef();

    useEffect(() => {
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting])

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create budget
            </h2>
            <p>What type of budget are you creating (grocery, housing, games)? How much is going in each budget?</p>
            <fetcher.Form method="post" className="grid-sm" ref={formRef}>
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input type="text" name="newBudget" id="newBudget" placeholder="Enter Budget Name" required ref={focusRef} autoComplete="off" />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input type="number" step="0.01" name="newBudgetAmount" id="newBudgetAmount" placeholder="Enter amount" required inputMode="decmial"/>
                </div>
                <input type="hidden" name="_action" value="createBudget"/>
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Submitting...</span> : (
                            <>
                                <span>Create budget</span>
                                <PlusCircleIcon width={24}/>
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}
export default AddBudgetForm