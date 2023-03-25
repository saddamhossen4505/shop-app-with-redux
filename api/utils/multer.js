import multer from "multer";

// Init multer.
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    if (file.fieldname == "productCategory_Photo") {
      cb(null, "api/public/categoryPhoto");
    }
    if (file.fieldname == "productBrand_Photo") {
      cb(null, "api/public/brandsPhoto");
    }

    if (file.fieldname == "productGallery_Photo") {
      cb(null, "api/public/productGalleryPhoto");
    }

    if (file.fieldname == "product_Photo") {
      cb(null, "api/public/productPhoto");
    }
  },
});

// ProductCategoryMulter.
export const productCategoryMulter = multer({ storage }).single(
  "productCategory_Photo"
);

// ProductBrandsMulter.
export const productBrandsMulter = multer({ storage }).single(
  "productBrand_Photo"
);

// ProductMulter.
export const productMulter = multer({ storage }).fields([
  {
    name: "product_Photo",
    maxCount: 1,
  },
  {
    name: "productGallery_Photo",
    maxCount: 10,
  },
]);
