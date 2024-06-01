import { Quote } from "../Components/Quote"
import { SignupForm } from "../Components/SignupForm"

export  const Signup = ()=>{
    return <div className="">
        <div className=" grid lg:grid-cols-2">
            <div><SignupForm/></div>
            <div className="invisible lg:visible"><Quote/></div>
        </div>
    </div>
}