"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";

interface TitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Titulo é obrigatório",
  }),
});

export const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const [isEditting, setIsEditting] = useState(false);
  const toggleEdit = () => setIsEditting((current) => !current)

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="mt-6 bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Titulo do Curso
        <Button onClick={toggleEdit}>
          {isEditting && <>Cancel</>}
          {!isEditting && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Editar Titulo
            </>
          )}
        </Button>
      </div>
      {!isEditting && (
        <p className="text-sm mt-2">{initialData.title}</p>
      )}
    </div>
  );
};
