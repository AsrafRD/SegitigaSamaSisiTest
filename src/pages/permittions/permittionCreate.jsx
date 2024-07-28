import FormPermittion from "../../components/Fragments/FormPermittion";
import FormLayout from "../../components/Layouts/FormLayouts";


const CreatePermittionPage = () => {
  return (
    <FormLayout title="Create Permittion" subTitle="Please fill out the form below">
      <FormPermittion mode="create" />
    </FormLayout>
  );
};

export default CreatePermittionPage;
