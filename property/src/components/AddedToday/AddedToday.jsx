import { Tabs, Tab, ButtonGroup, Button } from "@nextui-org/react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";

const AddedToday = () => {
  const [selected, setSelected] = useState("photos");
  return (
    <section className="mb-20 mt-20">
      <div className="flex w-full flex-col">
        <h2 className="font-bold text-3xl">Added today</h2>
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          className="mt-5"
          color={"primary"}
        >
          <Tab key="apartments" title="Apartments">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-4 w-full grid-cols-none">
              {/* Left */}
              <div className="mt-5 relative w-full">
                <img
                  alt="Title"
                  className={`object-cover xl:h-[500px] lg:h-[500px] md:h-[300px] h-60 w-full rounded-xl`}
                  src="/img/07.jpg"
                />
                <div className="absolute top-0 left-0 p-4 text-white flex gap-2 items-center text-sm">
                  <h6 className="bg-green-400 py-1 px-3 rounded-md">
                    Verified
                  </h6>
                  <h6 className="bg-blue-500 py-1 px-3 rounded-md">New</h6>
                </div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h4 className="uppercase font-semibold">For Rental</h4>
                  <h2 className="font-bold text-2xl">Luxuary Rental Villa</h2>
                  <div className="flex items-center mt-1 gap-1">
                    <FaLocationDot />
                    <p>118-11 12th street, Kandy</p>
                  </div>
                  {/* mobile */}
                  <div className="block sm:hidden mt-3">
                    <ButtonGroup>
                      <Button className="bg-primary text-white font-bold border-r border-gray-300 text-md">
                        From Rs.8500
                      </Button>
                      <Button className="bg-primary text-white">
                        <IoHeartOutline className="font-bold text-xl" />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-4 hidden sm:block">
                  <ButtonGroup>
                    <Button className="bg-primary text-white font-bold border-r border-gray-300 text-md">
                      From Rs.8500
                    </Button>
                    <Button className="bg-primary text-white">
                      <IoHeartOutline className="font-bold text-xl" />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>

              {/* Right */}
              <div>
                <div>
                  <div className="mt-5 relative">
                    <img
                      alt="Title"
                      className={`object-cover md:h-[300px] xl:h-60 lg:h-60 h-60 w-full rounded-xl`}
                      src="/img/07.jpg"
                    />
                    <div className="absolute top-0 left-0 p-4 text-white flex gap-2 items-center text-sm">
                      <h6 className="bg-green-400 py-1 px-3 rounded-md">
                        Verified
                      </h6>
                      <h6 className="bg-blue-500 py-1 px-3 rounded-md">New</h6>
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h4 className="uppercase font-semibold">For Rental</h4>
                      <h2 className="font-bold text-2xl">
                        Luxuary Rental Villa
                      </h2>
                      <div className="flex items-center mt-1 gap-1">
                        <FaLocationDot />
                        <p>118-11 12th street, Kandy</p>
                      </div>
                      {/* mobile */}
                      <div className="block sm:hidden mt-3">
                        <ButtonGroup>
                          <Button className="bg-primary text-white font-bold border-r border-gray-300 text-md">
                            From Rs.8500
                          </Button>
                          <Button className="bg-primary text-white">
                            <IoHeartOutline className="font-bold text-xl" />
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-4 hidden sm:block">
                      <ButtonGroup>
                        <Button className="bg-primary text-white font-bold border-r border-gray-300 text-md">
                          From Rs.8500
                        </Button>
                        <Button className="bg-primary text-white">
                          <IoHeartOutline className="font-bold text-xl" />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="relative">
                    <img
                      alt="Title"
                      className={`object-cover md:h-[300px] xl:h-60 lg:h-60 h-60 w-full rounded-xl`}
                      src="/img/07.jpg"
                    />
                    <div className="absolute top-0 left-0 p-4 text-white flex gap-2 items-center text-sm">
                      <h6 className="bg-green-400 py-1 px-3 rounded-md">
                        Verified
                      </h6>
                      <h6 className="bg-blue-500 py-1 px-3 rounded-md">New</h6>
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h4 className="uppercase font-semibold">For Rental</h4>
                      <h2 className="font-bold text-2xl">
                        Luxuary Rental Villa
                      </h2>
                      <div className="flex items-center mt-1 gap-1">
                        <FaLocationDot />
                        <p>118-11 12th street, Kandy</p>
                      </div>
                      {/* mobile */}
                      <div className="block sm:hidden mt-3">
                        <ButtonGroup>
                          <Button className="bg-primary text-white font-bold border-r border-gray-300 text-md">
                            From Rs.8500
                          </Button>
                          <Button className="bg-primary text-white">
                            <IoHeartOutline className="font-bold text-xl" />
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-4 hidden sm:block">
                      <ButtonGroup>
                        <Button className="bg-primary text-white font-bold border-r border-gray-300 text-md">
                          From Rs.8500
                        </Button>
                        <Button className="bg-primary text-white">
                          <IoHeartOutline className="font-bold text-xl" />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab key="houses" title="Houses"></Tab>
          <Tab key="rooms" title="Rooms"></Tab>
          <Tab key="buildings" title="Buildings"></Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default AddedToday;
