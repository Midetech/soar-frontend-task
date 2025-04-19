/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { countries } from "components/constants/countries";
import { profileFormFields } from "components/constants/profile-form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { motion } from "framer-motion";
import { Label } from "./ui/label";
import { CalendarIcon } from "lucide-react";
import { cn } from "components/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z
    .string()
    .min(10, { message: "Password must be at least 10 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
  address: z.string().min(5, {
    message: "Present address must be at least 5 characters.",
  }),
  dateOfBirth: z.date(),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  postalCode: z.string().regex(/^\d{4,6}$/, {
    message: "Postal code must be between 4 to 6 digits.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  permanentAddress: z.string().min(5, {
    message: "Permanent address must be at least 5 characters.",
  }),
});

const ProfileForm = ({
  imageUrl,
  tabVariants,
  setImageUrl,
}: {
  imageUrl: string;
  tabVariants: any;
  setImageUrl: (url: string) => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Charlene Reed",
      name: "Charlene Reed",
      email: "charlenereed@gmail.com",
      address: "San Jose, California, USA",
      permanentAddress: "San Jose, California, USA",
      city: "San Jose",
      postalCode: "45962",
      country: "US",
      dateOfBirth: new Date("1990-01-25"),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log(values);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Profile updated successfully!");
    }, 2000);
  }

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setImageUrl(file);
    }
  };

  return (
    <motion.div
      key="preferences"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={tabVariants}
      className="w-full h-full flex xl:flex-row flex-col gap-y-[22px] pt-[54px] gap-x-[57px]"
    >
      <div className="size-[98px] relative self-center lg:self-auto">
        <Avatar className="xl:size-[94px] size-[100px]">
          <AvatarImage
            src={
              typeof imageUrl === "string"
                ? imageUrl
                : URL.createObjectURL(imageUrl)
            }
            alt="Sunday Olomitutu"
          />
          <AvatarFallback>SO</AvatarFallback>
        </Avatar>

        <Input
          id="image"
          type="file"
          onChange={handleImageUpload}
          className="hidden"
          accept="image/*"
        />
        <Label htmlFor="image">
          <div className="size-[30px] rounded-[30px] absolute xl:top-16 top-16 -right-1.5 bg-black flex justify-center items-center cursor-pointer hover:bg-[#1E1E1E] transition-all duration-200">
            <Icons.PenIcon />
          </div>
        </Label>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="xl:w-[865px] h-full"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[29px] gap-y-[22px]">
              {profileFormFields.map((formItem) =>
                formItem.name === "country" ? (
                  <FormField
                    key={formItem.name}
                    control={form.control}
                    name={formItem.name}
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel htmlFor={formItem.name}>
                          {formItem.label}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full !h-[50px] rounded-[15px]">
                            <SelectValue
                              defaultValue={field.value}
                              placeholder={formItem.placeholder}
                            />
                          </SelectTrigger>
                          <SelectContent className="h-[350px]">
                            <SelectGroup>
                              {countries.map((country, idx) => (
                                <SelectItem key={idx + 1} value={country.value}>
                                  {country.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : formItem.name === "dateOfBirth" ? (
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                          <PopoverTrigger
                            asChild
                            className="w-full h-[50px] text-[#718EBF]"
                          >
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal col-span-1",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd MMMM yyyy")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent
                            className="col-span-1 p-0"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-25-01")
                              }
                              initialFocus
                              className="col-span-1"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <FormField
                    key={formItem.name}
                    control={form.control}
                    name={formItem.name}
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel htmlFor={formItem.name}>
                          {formItem.label}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={formItem.placeholder}
                            className="rounded-[15px] text-[#718EBF]"
                            type={formItem.type}
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )
              )}
            </div>
            <Button
              disabled={isSubmitting}
              className="w-[190px] h-[50px] float-right"
              type="submit"
            >
              {isSubmitting ? (
                <Icons.spinner className="animate-spin" />
              ) : (
                "Save"
              )}
            </Button>
          </form>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default ProfileForm;
