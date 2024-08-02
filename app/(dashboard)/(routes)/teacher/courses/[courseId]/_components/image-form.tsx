"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface ImageFormProps {
  initialData: {
    imageUrl: string | null;
  };
  courseId: string;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Imagem é obrigatório",
  }),
});

export const ImageForm = ({
  initialData,
  courseId,
}: ImageFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: initialData.imageUrl ?? ""
    }
  });

  const [isEditting, setIsEditting] = useState(false);
  const toggleEdit = () => setIsEditting((current) => !current);

  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Titulo do curso atualizado");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Algo deu errado");
    }
  };
  return (
    <div className="mt-6 bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Imagem do curso
        <Button onClick={toggleEdit}>
          {isEditting && (
            <>Cancelar</>
          )}
          {!isEditting && !initialData.imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Adicione uma imagem
            </>
          )}
          {!isEditting && initialData.imageUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Editar imagem
            </>
          )}
        </Button>
      </div>
      {!isEditting && <p className={cn(
        "text-sm mt-2",
        !initialData.imageUrl && "text-slate-500 italic"
      )}>{initialData.imageUrl || "Sem descrição"}</p>}
      {isEditting && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      disabled={isSubmitting}
                      placeholder="Ex: Esse curso é sobre..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Salvar
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
