import React from "react";
import Text from "../global/Text";
import MyButton from "../global/MyButton";
import Card from "../global/Card";
// import Bg from "../images/bg-banner-cd590097.png";

const Page = () => {
  return (
    <div className="px-5 md:px-28 pb-20">
      <div className="md:flex md:justify-between md:items-center">
        <Text
          title="Choose the plan that's right for you"
          textTitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
          bgTextTitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
          classname="w-[90%]"
        />
        <div className="flex border-2 border-neutral-800 rounded-lg p-3 w-44">
          <MyButton classname="bg-neutral-800 p-3">Monthly</MyButton>
          <MyButton classname="p-3">Yearly</MyButton>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="md:grid grid-cols-3 gap-5">
          <Card className="bg-neutral-900 my-6 p-5 md:px-10">
            <Text
              title="Basic Plan"
              textTitle="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
              bgTextTitle="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
            />
            <p className="text-sm text-neutral-600">
              <span className="text-2xl text-white font-bold">$9.99</span>{" "}
              /month
            </p>
            <div className="flex items-center gap-4 py-6 w-full justify-between">
              <MyButton classname="bg-neutral-950 border-2 border-neutral-800 py-4 px-4 w-1/2">
                Start Free Trial
              </MyButton>
              <MyButton classname="bg-red-600 py-4 px-6  w-1/2">
                Choose Plan
              </MyButton>
            </div>
          </Card>
          <Card className="bg-neutral-900 my-6 p-5 md:px-10">
            <Text
              title="Standard Plan"
              textTitle="Access to a wider selection of movies and shows, including most new releases and exclusive content."
              bgTextTitle="Access to a wider selection of movies and shows, including most new releases and exclusive content."
            />
            <p className="text-sm text-neutral-600">
              <span className="text-2xl text-white font-bold">$12.99</span>{" "}
              /month
            </p>
            <div className="flex gap-4 items-center py-6 w-full justify-between">
              <MyButton classname="bg-neutral-950 border-2 border-neutral-800 py-4 px-4 w-1/2">
                Start Free Trial
              </MyButton>
              <MyButton classname="bg-red-600 py-4 px-6  w-1/2">
                Choose Plan
              </MyButton>
            </div>
          </Card>
          <Card className="bg-neutral-900 my-6 p-5 md:px-10">
            <Text
              title="Premium Plan"
              textTitle="Access to a widest selection of movies and shows, including all new releases and Offline Viewing."
              bgTextTitle="Access to a widest selection of movies and shows, including all new releases and Offline Viewing."
            />
            <p className="text-sm text-neutral-600">
              <span className="text-2xl text-white font-bold">$14.99</span>
              /month
            </p>
            <div className="flex gap-4 items-center py-6 w-full justify-between">
              <MyButton classname="bg-neutral-950 border-2 border-neutral-800 py-4 px-4 w-1/2">
                Start Free Trial
              </MyButton>
              <MyButton classname="bg-red-600 py-4 px-6  w-1/2">
                Choose Plan
              </MyButton>
            </div>
          </Card>
        </div>
        <Card className="bg-[url(/bg-banner-cd590097.png)] h-80 bg-cover md:my-32">
          <div className="h-full w-full bg-linear-to-b from-black/95 to-red-600/50 flex flex-col justify-center items-center rounded-xl">
            <Text
              title="Start your free trial today!"
              textTitle="This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe."
              textAlign="text-center"
            />
            <MyButton classname="bg-red-600 p-5 m-auto my-10">
              Start a Free Trial
            </MyButton>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Page;
