import { Checkbox, CheckboxGroup } from "@nextui-org/react";

/* eslint-disable react/prop-types */
const Amentetis = ({ Controller, control }) => {
  return (
    <Controller
      name="amenteties"
      control={control}
      render={({ field }) => (
        <>
          <CheckboxGroup {...field}>
            {/* <div className="flex items-center gap-40"> */}
            <div className="grid grid-cols-3 gap-2">
              <div className="mt-3">
                <div className="block">
                  <Checkbox size="sm" className="block" value={"WiFi"}>
                    WiFi
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Pets-friendly"}>
                    Pets-friendly
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Dishwasher"}>
                    Dishwasher
                  </Checkbox>

                  <Checkbox
                    size="sm"
                    className="block"
                    value={"Air conditioning"}
                  >
                    Air conditioning
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Pool"}>
                    Pool
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Iron"}>
                    Iron
                  </Checkbox>
                </div>
              </div>
              <div>
                <div>
                  <Checkbox size="sm" className="block" value={"Balcony"}>
                    Balcony
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Bar"}>
                    Bar
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Hair dryer"}>
                    Hair dryer
                  </Checkbox>

                  <Checkbox size="sm" className="block" value={"Garage"}>
                    Garage
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"TV"}>
                    TV
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Kitchen"}>
                    Kitchen
                  </Checkbox>
                </div>
              </div>
              <div>
                <div>
                  <Checkbox size="sm" className="block" value={"Gym"}>
                    Gym
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Linens"}>
                    Linens
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Breakfast"}>
                    Breakfast
                  </Checkbox>

                  <Checkbox size="sm" className="block" value={"Free parking"}>
                    Free parking
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Heating"}>
                    Heating
                  </Checkbox>
                  <Checkbox
                    size="sm"
                    className="block"
                    value={"Security cameras"}
                  >
                    Security cameras
                  </Checkbox>
                </div>
              </div>
            </div>
          </CheckboxGroup>
        </>
      )}
    />
  );
};

export default Amentetis;
