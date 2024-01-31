import { updateTitle } from "@/lib/util/update-title";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { updateCustomerData } from "@/lib/api/graphql/internal-apis/customers";
import { updateCustomerType, updateCustomerZodSchema } from "@/lib/types/update-customer-schema";

const Testing = () => {
  updateTitle("Test");

  const { getAccessTokenSilently } = useAuth0();

  const { mutate } = useMutation({
    mutationFn: async (customerData: updateCustomerType) =>
      updateCustomerData(customerData, `${await getAccessTokenSilently()}`),
    onSuccess: () => {}
  });

  const form = useForm<updateCustomerType>({
    resolver: zodResolver(updateCustomerZodSchema)
  });

  const onSubmit = (customerFormData: updateCustomerType) => {
    mutate(customerFormData);
    console.log(customerFormData);
  };

  return (
    <div className="flex p-8 justify-center max-w-[800px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="customer_id"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Customer ID</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="Customer ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact_name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Contact Name</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="Contact Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact_title"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Contact Title</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="Contact Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Region</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="Region" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postal_code"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="Postal Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fax"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Fax Number</FormLabel>
                <FormControl>
                  <input className="px-2 border border-slate-600/50 rounded" placeholder="Fax Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit">Submit</button>
        </form>
      </Form>
    </div>
  );
};

export default Testing;
