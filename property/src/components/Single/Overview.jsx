import { Divider } from "@nextui-org/react";

/* eslint-disable react/prop-types */
const Overview = ({ property }) => {
  // const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="flex items-center gap-2">
        <h6 className="bg-green-400 py-1 px-3 rounded-md text-white">
          Verified
        </h6>
        <h6 className="bg-blue-500 py-1 px-3 rounded-md text-white">New</h6>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <h2 className="font-bold text-3xl">
          {property.price.currencyType}.{property.price.total}
        </h2>
        <p className="text-secondary text-lg">/{property.price.period}</p>
      </div>
      <Divider orientation="horizontal" className="mt-5" />
      <div className="mt-5">
        <h2 className="font-bold text-2xl">Overview</h2>
        <p className="text-secondary text-[17px] text-justify mt-3">
          {property.property.description}
        </p>
        {/* {showMore && (
          <p className="text-secondary text-[17px] text-justify">
            Asperiores eos molestias, aspernatur assumenda vel corporis ex,
            magni excepturi totam exercitationem quia inventore quod amet labore
            impedit quae distinctio? Officiis blanditiis consequatur alias,
            atque, sed est incidunt accusamus repudiandae tempora repellendus
            obcaecati delectus ducimus inventore tempore harum numquam autem
            eligendi culpa.
          </p>
        )} */}
        {/* <p
          onClick={() => setShowMore(!showMore)}
          className="underline text-primary cursor-pointer hover:no-underline"
        >
          Show {showMore ? "less" : "more"}
        </p> */}
      </div>
    </>
  );
};

export default Overview;
