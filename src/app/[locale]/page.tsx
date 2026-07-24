import { Button } from "@/components/ui/button";
import { BsInfoSquareFill } from "react-icons/bs";
import { getTranslations } from "next-intl/server";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations("home");

  const isRTL = locale === "fa" || locale === "ar";

  return (
    <section
      className="h-full"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* Text */}
          <div
            className={`
              text-center
              xl:order-0
              ${isRTL ? "xl:text-right" : "xl:text-left"}
            `}
          >

            <span className="text-xl pb-8">
              {t("subtitle")}
            </span>

            <h1 className="h1 mb-6">
              {t("title")}
              <br />

              <span className="text-accent">
                Azar Bonyan Marava
              </span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              <b>
                Azar Bonyan Marava
              </b>{" "}
              {t("description")}
            </p>


            <div className="flex flex-col xl:flex-row items-center gap-8">

              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <BsInfoSquareFill />

                <span>
                  {t("button")}
                </span>
              </Button>


              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>

            </div>

          </div>


          {/* Photo */}
          <div className="order-1 xl:order-0 mb-8 xl:mb-0">
            <Photo />
          </div>


        </div>

      </div>

      <Stats />

    </section>
  );
}