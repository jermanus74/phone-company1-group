import { Button } from "../shared/Button";
import Image1 from "../../assets/cat/img3.avif";
import Image2 from "../../assets/cat/img4.avif";
import Image3 from "../../assets/cat/pods.png";

export const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container lg:p-1">
        <div
          className="p-3 grid grid-cols-1 sm:grid-cols-2
         lg:grid-cols-4 gap-8"
        >
          {/* third col */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-600
                to-gray-100 text-white rounded-3xl relative h-[290px]
                flex items-end"
          >
            <div className="relative w-full h-full flex flex-col justify-end  items-start">
              <div className="space-y-3 mb-2">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p
                  className="mb-[2px] text-2xl font-semibold
                 text-white "
                >
                  With
                </p>
                <p
                  className="text-4xl xl:text-5xl font-bold text-white opacity-40
                mb-2 "
                >
                  S 24 ultra
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                  className="z-10"
                />
              </div>
              <img
                src={Image1}
                alt="S 24 ultra"
                className="w-[250px] h-[250px] absolute right-0 bottom-[-20px] z-[10]"
              />
            </div>
          </div>
          {/* first col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-orange-700
                to-orange-600/90 text-white rounded-3xl relative h-[290px]
                flex items-end w-auto"
          >
            <div className="relative w-full h-full flex flex-col justify-end">
              <div className="space-y-3 mb-2">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p
                  className="mb-[2px] text-2xl font-semibold z-10
                  "
                >
                  With
                </p>
                <p
                  className="text-4xl xl:text-5xl font-bold opacity-40
                mb-2 "
                >
                  Pods
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-orange-500"
                  className="z-10"
                />
              </div>
              <img
                src={Image3}
                alt="Pods"
                className="w-[300px] absolute -right-4 -bottom-7 z-[10] -translate-y-1/3 "
              />
            </div>
          </div>
          {/* second col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-green-800
                to-green-400/70 text-white rounded-3xl relative h-[290px]
                flex items-end"
          >
            <div className="relative w-full h-full flex flex-col justify-end">
              <div className="space-y-3 mb-2">
                <p className="mb-[2px] text-white">Get </p>
                <p
                  className="mb-[2px] text-2xl font-semibold
                  "
                >
                  your
                </p>
                <p
                  className="text-4xl xl:text-5xl font-bold opacity-40
                mb-2 "
                >
                  Gadgets
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandGreen"
                  className="z-10"
                />
              </div>
              <img
                src={Image2}
                alt="Gadgets"
                className="w-[200px] absolute -right-2 bottom-10 lg:top-[40] z-[10]"
              />
            </div>
          </div>

          {/* ll */}
        </div>
      </div>
    </div>
  );
};
