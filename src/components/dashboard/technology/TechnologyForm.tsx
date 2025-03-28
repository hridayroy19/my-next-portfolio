/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { addTechnology } from "@/services/technology";

export interface ProjectData {
  name: string;
  image: string;
}

export default function AddTechnologyForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      image: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const FormData: ProjectData = {
      name: data.name,
      image: data.image,
    };
    console.log(FormData);
    try {
      const res = await addTechnology(FormData);
      console.log(res, "final data");
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="  rounded-xl flex-grow w-full p-5 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technology Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Url</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Image URL" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Project..." : "Add Project"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
