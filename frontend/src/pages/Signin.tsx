import { Quote } from "../Components/Quote"
import { SigninForm } from "../Components/SigninForm"

export  const Signin = ()=>{
    return <div className="">
        <div className=" grid lg:grid-cols-2">
            <div><SigninForm/></div>
            <div className="invisible lg:visible"><Quote/></div>
        </div>
    </div>
}