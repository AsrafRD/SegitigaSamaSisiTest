import FormLayout from "../components/Layouts/FormLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <FormLayout title="Login" subTitle="Welcome, Please enter your details">
            <FormLogin />
            <p className="text-sm mt-5 text-center">Don't have an account?{" "}
                <Link to="/register" className="font-bold text-blue-600">
                Register now
                </Link>
            </p>
        </FormLayout>
    )
}

export default LoginPage;