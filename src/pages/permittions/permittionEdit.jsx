import FormPermittion from "../../components/Fragments/FormPermittion";
import FormLayout from "../../components/Layouts/FormLayouts";


const EditPermittionPage = () => {
  return (
    <FormLayout title="Edit Permittion" subTitle="Please update the form below">
      <FormPermittion mode="edit" />
    </FormLayout>
  );
};

export default EditPermittionPage;
