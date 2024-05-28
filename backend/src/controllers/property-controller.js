import Property from "../models/Property.js";

export const addProperties = async (req, res, next) => {
  try {
    const {
      title,
      category,
      type,
      country,
      district,
      city,
      zip,
      street,
      area,
      bedrooms,
      bathrooms,
      parking,
      amenteties,
      pets,
      description,
      currencyType,
      total,
      period,
      user_id,
      status,
    } = req.body;

    const files = req.files;
    // Extract filenames from the array of file objects
    const filenames = files.map((file) => file.filename);

    const propertyData = new Property({
      title: title,
      category: category,
      type: type,
      address: {
        country: country,
        district: district,
        city: city,
        zip: zip,
        street: street,
      },
      property: {
        area: area,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        parking: parking,
        amenteties: amenteties,
        pets: pets,
        description: description,
      },
      price: {
        currencyType: currencyType,
        total: total,
        period: period,
      },
      photos: filenames,
      user_id: user_id,
      status: status,
    });
    await propertyData.save();
    return res.status(200).json({ message: "Property save.", propertyData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", cause: error.message });
  }
};

export const getAllProperties = async (req, res, next) => {
  try {
    const properties = await Property.find();

    return res.status(200).json({ message: "Ok", properties });
  } catch (error) {
    return res.status(500).json({ message: "Error", cause: error.message });
  }
};

export const getPropertyById = async (req, res, next) => {
  try {
    const { property_id } = req.params;
    const property = await Property.findById(property_id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    return res.status(200).json({ message: "Ok", property });
  } catch (error) {
    return res.status(500).json({ message: "Error", cause: error.message });
  }
};

export const getPropertyByType = async (req, res, next) => {
  try {
    const { category, city, type } = req.query;
    console.log(type);
    let query = { category: category };

    if (city) {
      query["address.city"] = city;
    }
    if (type) {
      query["type"] = type;
    }
    console.log(query);
    const properties = await Property.find(query);

    if (properties.length === 0) {
      return res.status(404).json({ message: "Properties not found" });
    }
    return res.status(200).json({ message: "Ok", properties });
  } catch (error) {
    return res.status(500).json({ message: "Error", cause: error.message });
  }
};

export const getPropertyByLocation = async (req, res, next) => {
  try {
    const { city } = req.body;

    if (!city) {
      return res.status(400).json({ message: "City not provided" });
    }

    const properties = await Property.find({ "address.city": city });
    if (properties.length === 0) {
      return res.status(404).json({ message: "Properties not found" });
    }
    return res.status(200).json({ message: "Ok", properties });
  } catch (error) {
    return res.status(500).json({ message: "Error", cause: error.message });
  }
};

export const getPropertyByCategory = async (req, res, next) => {
  try {
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Category not provided" });
    }

    const properties = await Property.find({ category: category });
    if (properties.length === 0) {
      return res.status(404).json({ message: "Properties not found" });
    }
    return res.status(200).json({ message: "Ok", properties });
  } catch (error) {
    return res.status(500).json({ message: "Error", cause: error.message });
  }
};

export const getPropertyByLatest = async (req, res, next) => {
  try {
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Category not provided" });
    }

    const properties = await Property.find({ category: category })
      .sort({ created_at: -1 }) // Sort by created_at field in descending order
      .limit(3); // Limit the result to 3 records

    if (properties.length === 0) {
      return res.status(404).json({ message: "Properties not found" });
    }

    return res.status(200).json({ message: "Ok", properties });
  } catch (error) {
    return res.status(500).json({ message: "Error", cause: error.message });
  }
};
