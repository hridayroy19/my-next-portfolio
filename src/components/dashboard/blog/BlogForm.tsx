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
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export default function BlogForm() {
  const editorRef = useRef<any>(null);
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

  const { setValue, handleSubmit, formState } = form;
  const { isSubmitting } = formState;

  // Handle TinyMCE initialization
  const handleInit = (_evt: any, editor: any) => {
    editorRef.current = editor;
  };

  // Sync TinyMCE content with form state
  const handleEditorChange = () => {
    if (editorRef.current) {
      setValue("description", editorRef.current.getContent(), {
        shouldValidate: true,
      });
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
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
              name="publishedDate"
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

            {/* Scalability */}
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

          {/* Description (TinyMCE Editor) */}
          <div className="my-4">
            <Editor
              apiKey="5569hwpo4g40ruzvci03bsqervx18z7cmbao3lupel2z2f9g"
              onInit={handleInit}
              initialValue={form.getValues("description")}
              init={{
                height: 300,
                menubar: false,
                plugins: "lists link image",
                toolbar: "undo redo | bold italic | bullist numlist outdent indent | link image",
              }}
              onEditorChange={handleEditorChange}
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
