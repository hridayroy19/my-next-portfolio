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
import { addProduct } from "@/services/projcet";

export interface ProjectData {
  project_name: string;
  title: string;
  about: string;
  imgOne: string;
  technology: string;
  github_link_client: string;
  github_link_server: string;
  live_link: string;
  future_one:string
  future_tow:string
  future_three:string
  future_four:string
  description:string
}

export default function AddProjcetForm() {
  const form = useForm({
    defaultValues: {
      project_name: "",
      about: "",
      title: "",
      imgOne: "",
      technology: "",
      github_link_client: "",
      github_link_server: "",
      live_link: "",
      future_one:"",
      future_tow:"",
      future_three:"",
      future_four:"",
      description:""

    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const FormData:ProjectData = {
      project_name: data.project_name,
      title: data.title,
      about: data.about,
      imgOne: data.imgOne,
      technology: data.technology,
      github_link_client: data.github_link_client,
      github_link_server: data.github_link_server,
      live_link: data.live_link,
      future_one:data.future_one,
      future_tow:data.future_tow,
      future_three:data.future_three,
      future_four:data.future_four,
      description:data.description
    };
    // console.log(FormData);
    try {
      const res = await addProduct(FormData);
console.log(res,"final data")
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="project_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter project name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imgOne"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter image URL" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="technology"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technologies</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g., React, Next.js" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="github_link_client"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Client</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Client GitHub URL" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="github_link_server"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Server</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Server GitHub URL" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="live_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Live Link</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Live site URL" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="future_one"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>projcet Fetures 1</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="projcet Fetures 1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="future_tow"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Futures 2</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Futures 2" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="future_three"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Futures 3</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Futures 3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="future_four"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Futures 4</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Futures 4" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-4 flex mx-auto gap-6">
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <textarea
                      className="h-20 w-full lg:w-[250px] border rounded resize-none p-2"
                      {...field}
                      placeholder="Write about the project"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea
                      className="h-20 w-full  lg:w-[250px] border rounded resize-none p-2"
                      {...field}
                      placeholder="Write about the project"
                    />
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
