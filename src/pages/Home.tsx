import { Button, buttonVariants } from "@/components/ui/button";
import { FaArrowRight, FaClock, FaPhoneAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MainLayout from "@/layouts/MainLayout";
import {
  Link,
  LucideBike,
  LucideCalendar,
  LucideLock,
  LucideMail,
  LucidePhone,
} from "lucide-react";
import React from "react";
import { MdEmail, MdMail } from "react-icons/md";
import SplitText from "@/components/reactbits/SplitText";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RotatingText from "@/components/reactbits/RotatingText";

const Home = () => {
  return (
    <MainLayout>
      <div className="relative">
        <div>
          <img
            className="h-auto md:h-[500px] max-w-full md:w-full object-cover "
            src="/images/banner.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="absolute left-32 top-32 w-1/2 ">
            <div className="mb-5">
              <SplitText
                text="LOREM IPSUN DOLOR SIT TIA SAYANGGG"
                className="text-5xl font-semibold text-center text-slate-50 text-5xl font-bold "
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>
            <div>
              <p className="text-slate-50 font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                nostrum reiciendis, perferendis repellat architecto nemo
                dolorem.
              </p>
              <div className="w-fit flex justify-center items-center mt-10">
                <h1 className="text-5xl font-bold text-sky-50">Tia</h1>
                <RotatingText
                  texts={["Sayangg❤️", "Cantik😍", "Lucuu😃", "Galakk😤"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold text-5xl"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2500}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center -translate-y-12">
            <Card className="p-5 bg-cyan-500 border-transparent rounded-none">
              <CardHeader className="flex gap-4 text-slate-50 flex-row justify-center items-center">
                <CardTitle>
                  <FaPhoneAlt size={30} className="" />
                </CardTitle>
                <CardDescription>
                  Have a question? call us now <br />
                  +628237948293
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-5 bg-cyan-600 border-transparent rounded-none">
              <CardHeader className="flex flex-row justify-center items-center text-slate-50 gap-4">
                <CardTitle>
                  <FaClock size={30} />
                </CardTitle>
                <CardDescription>
                  We are open Non-Fri <br />
                  Mon - Fri 08:00 - 17:00
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-5 bg-cyan-700 border-transparent rounded-none">
              <CardHeader className="flex flex-row justify-center items-center text-slate-50 gap-4">
                <CardTitle>
                  <MdEmail size={30} />
                </CardTitle>
                <CardDescription>Need Support? Drop us email</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <section className="px-32 space-y-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl text-cyan-600">Why Choose Us?</h1>
            <p className="font-light text-cyan-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              molestias?
            </p>
          </div>
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col items-center justify-center w-52 gap-2">
              <div className="p-2 bg-cyan-600 rounded-full w-fit text-slate-50">
                <LucidePhone />
              </div>
              <h3>EXPERT CLEANER</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis culpa ipsam, numquam hic minus libero deserunt veritatis
                iusto quod tempore similique officiis.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-52 gap-2">
              <div className="p-2 bg-cyan-600 rounded-full w-fit text-slate-50">
                <LucideCalendar />
              </div>
              <h3>EXPERT CLEANER</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis culpa ipsam, numquam hic minus libero deserunt veritatis
                iusto quod tempore similique officiis.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-52 gap-2">
              <div className="p-2 bg-cyan-600 rounded-full w-fit text-slate-50">
                <LucideMail />
              </div>
              <h3>EXPERT CLEANER</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis culpa ipsam, numquam hic minus libero deserunt veritatis
                iusto quod tempore similique officiis.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-52 gap-2">
              <div className="p-2 bg-cyan-600 rounded-full w-fit text-slate-50">
                <LucideBike />
              </div>
              <h3>EXPERT CLEANER</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis culpa ipsam, numquam hic minus libero deserunt veritatis
                iusto quod tempore similique officiis.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
