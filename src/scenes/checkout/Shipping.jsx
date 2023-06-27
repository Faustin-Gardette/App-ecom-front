import { Box, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({ values, touched, errors, handleChange, handleBlur }) => {
  return (
    <Box m="30px auto">
      {/* BILLING FORM */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Informations de Livraison
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default Shipping;
