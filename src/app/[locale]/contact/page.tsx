"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

import { useLocale } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  const [submitStatus, setSubmitStatus] = useState<
    "success" | "error" | null
  >(null);

  const [loading, setLoading] = useState(false);

  const locale = useLocale();

  const isRTL = locale === "fa" || locale === "ar";

  const schema = contactSchema(t);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const service = watch("service");
  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);
      setSubmitStatus(null);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });


      const result = await res.json();


      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }


    } catch (error) {

      setSubmitStatus("error");

    } finally {

      setLoading(false);

    }
  };

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: t("info.phone.title"),
      description: t("info.phone.description"),
    },
    {
      icon: <FaEnvelope />,
      title: t("info.email.title"),
      description: t("info.email.description"),
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t("info.address.title"),
      description: t("info.address.description"),
    },
  ];


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >

      <div className="container mx-auto">

        <div className="flex flex-col xl:flex-row gap-[30px]">


          {/* Form */}

          <div className="xl:w-[54%] order-2 xl:order-0">

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >


              <h3
                className={`text-4xl text-accent ${isRTL ? "text-right" : "text-left"
                  }`}
              >
                {t("title")}
              </h3>

              <p
                className={`text-white/60 ${isRTL ? "text-right" : "text-left"
                  }`}
              >
                {t("description")}
              </p>



              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                <div>
                  <Input
                    {...register("firstname")}
                    dir={isRTL ? "rtl" : "ltr"}
                    type="text"
                    placeholder={t("form.firstname")}
                  />

                  {errors.firstname && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>



                <div>
                  <Input
                    {...register("lastname")}
                    dir={isRTL ? "rtl" : "ltr"}
                    type="text"
                    placeholder={t("form.lastname")}
                  />

                  {errors.lastname && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>



                <div>
                  <Input
                    {...register("email")}
                    dir={isRTL ? "rtl" : "ltr"}
                    type="email"
                    placeholder={t("form.email")}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>



                <div>
                  <Input
                    {...register("phone")}
                    dir={isRTL ? "rtl" : "ltr"}
                    type="tel"
                    placeholder={t("form.phone")}
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.phone.message}
                    </p>
                  )}
                </div>


              </div>





              <div>

                <Select
                  value={service}

                  onValueChange={(value) => {
                    setValue("service", value ?? "", {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                  }}                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("form.service")} />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("form.service")}</SelectLabel>

                      <SelectItem value="construction">
                        {t("services.construction")}
                      </SelectItem>

                      <SelectItem value="import">
                        {t("services.import")}
                      </SelectItem>

                      <SelectItem value="export">
                        {t("services.export")}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>


                {errors.service && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.service.message}
                  </p>
                )}

              </div>





              <div>

                <Textarea
                  {...register("message")}
                  dir={isRTL ? "rtl" : "ltr"}
                  className="h-[200px]"
                  placeholder={t("form.message")}
                />


                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message.message}
                  </p>
                )}

              </div>



              {submitStatus === "success" && (
                <div className="rounded-md bg-green-500/10 border border-green-500 p-3 text-green-400 text-center">
                  {t("messages.success")}
                </div>
              )}


              {submitStatus === "error" && (
                <div className="rounded-md bg-red-500/10 border border-red-500 p-3 text-red-400 text-center">
                  {t("messages.error")}
                </div>
              )}

              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={loading}
              >
                {loading
                  ? t("messages.sending")
                  : t("form.submit")}
              </Button>



            </form>


          </div>





          {/* Info */}

          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-0 mb-8 xl:mb-0">


            <ul className="flex flex-col gap-10">


              {info.map((item, index) => (

                <li
                  key={index}
                  className="flex items-center gap-6"
                >


                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">


                    <div className="text-[28px]">
                      {item.icon}
                    </div>


                  </div>




                  <div className="flex-1">


                    <p className="text-white/60">
                      {item.title}
                    </p>


                    <h3 className="text-xl">
                      {item.description}
                    </h3>


                  </div>



                </li>

              ))}


            </ul>


          </div>


        </div>


      </div>


    </motion.section>
  );
};


export default Contact;