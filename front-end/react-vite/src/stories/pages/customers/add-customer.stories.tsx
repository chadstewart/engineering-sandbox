import AddCustomer from "@/components/pages/customers/add_customer/add-customer-content";
import { updateCustomerType } from "@/lib/types/update-customer-schema";

const storyConfig = {
  title: "Design System/Pages/Customer/Add Customer"
};

export default storyConfig;

const emptyFunc = (customerData: updateCustomerType) => {
  customerData;
};

export const AddCustomerStory = () => (
  <AddCustomer isLoading={false} error={null} content={undefined} onSubmit={emptyFunc} />
);
