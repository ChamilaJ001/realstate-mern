import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Breadcrumb = ({ route, preName, nowName, midName, midRoute }) => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <Link
          to={route}
          className="font-semibold hover:text-black ease-in-out duration-300"
        >
          {preName}
        </Link>
      </BreadcrumbItem>
      {midName ? (
        <BreadcrumbItem>
          <Link
            to={midRoute}
            className="font-semibold hover:text-black ease-in-out duration-300"
          >
            {midName}
          </Link>
        </BreadcrumbItem>
      ) : (
        ""
      )}
      <BreadcrumbItem>
        <p className="text-primary text-sm">{nowName}</p>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
