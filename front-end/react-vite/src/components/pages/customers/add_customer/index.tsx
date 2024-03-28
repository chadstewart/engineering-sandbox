import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCustomerIDs, updateCustomerData } from "@/lib/api/graphql/internal-apis/customers";
import { updateCustomerType } from "@/lib/types/update-customer-schema";
import { useState } from "react";
import AddCustomerContent from "./add-customer-content";
import { updateTitle } from "@/lib/util/update-title";
import { useAuth } from "@/lib/auth/hooks/use-auth";

const AddCustomer = () => {
  updateTitle("Customer | Add Customer");

  const { getAccessToken } = useAuth();
  const [accessToken, setAccessToken] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["responseData"],
    queryFn: async () => {
      const returnedToken = await getAccessToken();
      setAccessToken(returnedToken);
      return getAllCustomerIDs(returnedToken);
    }
  });

  const { mutate } = useMutation({
    mutationFn: (customerData: updateCustomerType) => updateCustomerData(customerData, accessToken),
    onSuccess: () => {}
  });

  const onSubmit = (customerFormData: updateCustomerType) => {
    mutate(customerFormData);
    console.log(customerFormData);
  };

  return <AddCustomerContent content={data} isLoading={isLoading} error={error} onSubmit={onSubmit} />;
};

export default AddCustomer;
