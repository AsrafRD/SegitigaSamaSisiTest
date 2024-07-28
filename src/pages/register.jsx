import FormLayout from "../components/Layouts/FormLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <FormLayout title="Register" subTitle="Welcome, Please enter your details">
            <FormRegister />
            <p className="text-sm mt-5 text-center">Have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600">
                Login now
                </Link>
            </p>
        </FormLayout>
    )
}

export default RegisterPage;