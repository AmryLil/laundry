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
import SplitText from "@/components/Reactbits/SplitText";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RotatingText from "@/components/Reactbits/RotatingText";
import CardService from "@/components/Home/CardService";
import ScrollVelocity from "@/components/Reactbits/VelocityText";

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
                text="Solusi cuci pakaian cepat bersih dan nyaman"
                className=" uppercase text-center text-slate-50 text-4xl font-bold "
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
              <p className="text-slate-50 font-light pr-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid hic nesciunt dolore vero quae fuga, nemo voluptatibus
                tempora ut corrupti? Totam incidunt sapiente et aliquid! Maiores
                beatae quae pariatur modi doloribus deserunt cumque dolorem
                fugit. Fugiat alias quisquam eum ipsa.
              </p>
            </div>
            <button className="mt-5 bg-slate-50 text-slate-900 px-4 rounded-md">
              Gasskan
            </button>
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
        <section className="mt-10 px-32 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl text-cyan-600">OUR SERVICES</h1>
            <p className="font-light text-cyan-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              molestias?
            </p>
          </div>
          <div className=" flex  justify-center items-center gap-x-10">
            <div className="space-y-8">
              <CardService
                title="Delevery"
                description="Lorem ipsum dolor sit amet consectetur."
                image="images/delevery.jpeg"
                isRight={true}
              />
              <CardService
                title="Delevery"
                description="Lorem ipsum dolor sit amet consectetur."
                image="images/delevery.jpeg"
                isRight={true}
              />
              <CardService
                title="Delevery"
                description="Lorem ipsum dolor sit amet consectetur."
                image="images/delevery.jpeg"
                isRight={true}
              />
            </div>
            <div className="w-[50%] h-full">
              <img src="images/servicebanner.png" alt="" />
            </div>
            <div className="space-y-8">
              <CardService
                title="Delevery"
                description="Lorem ipsum dolor sit amet consectetur."
                image="images/delevery.jpeg"
                isRight={false}
              />
              <CardService
                title="Delevery"
                description="Lorem ipsum dolor sit amet consectetur."
                image="images/delevery.jpeg"
                isRight={false}
              />
              <CardService
                title="Delevery"
                description="Lorem ipsum dolor sit amet consectetur."
                image="images/delevery.jpeg"
                isRight={false}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="relative w-full  flex items-center justify-center overflow-hidden bg-cyan-700 py-10 text-slate-50">
            <div className="border-t-4 border-b-4 border-cyan-900 py-5 pb-3">
              <ScrollVelocity
                texts={["Cleanease ✦ Laundry ✦ Fast ✦ Clean ✦ Good ✦"]}
                className="font-josefin font-semibold"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-transparent to-cyan-900 pointer-events-none"></div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
