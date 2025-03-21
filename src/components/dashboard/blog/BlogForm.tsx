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
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { addBlog } from "@/services/blog";
import { IBloge } from "@/type";

export default function BlogForm() {
  const form = useForm<IBloge>({
    defaultValues: {
      name: "",
      publishedDate: "", 
      image: "",
      description: "",
      practicality: "",
      accuracy: "",
      reliability: "",
      optimization: "",
      scalable: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<IBloge> = async (data) => {
    console.log(data, "data");
    try {
      const res = await addBlog(data);
      console.log(res, "final data");

      if (res.success) {
        toast.success("Blog added successfully!");
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="rounded-xl flex-grow w-full p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Blog Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter blog name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Published Date */}
            <FormField
              control={form.control}
              name="publishedDate" // ✅ FIXED
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Published Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" placeholder="Enter date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image URL */}
            <FormField
              control={form.control}
              name="image"
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

            {/* Practicality */}
            <FormField
              control={form.control}
              name="practicality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Practicality</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g., High, Medium, Low" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Accuracy */}
            <FormField
              control={form.control}
              name="accuracy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accuracy</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g., High, Medium, Low" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Reliability */}
            <FormField
              control={form.control}
              name="reliability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reliability</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g., High, Medium, Low" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Optimization */}
            <FormField
              control={form.control}
              name="optimization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Optimization</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Describe optimization" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Scalable Flexibility */}
            <FormField
              control={form.control}
              name="scalable"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Scalability / Flexibility</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Yes / No" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Description / About Blog */}
          <div className="my-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea
                      className="h-20 w-full border rounded resize-none p-2"
                      {...field}
                      placeholder="Write about the blog"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Blog..." : "Add Blog"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
