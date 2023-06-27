import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            E-COMMERCE
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            À propos
          </Typography>
          <Typography mb="30px">Carrières</Typography>
          <Typography mb="30px">Nos magasins</Typography>
          <Typography mb="30px">Conditions générales</Typography>
          <Typography mb="30px">Confidentialité</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Service clientèle
          </Typography>
          <Typography mb="30px">Centre d'aide</Typography>
          <Typography mb="30px">Suivre votre commande</Typography>
          <Typography mb="30px">Achats en gros</Typography>
          <Typography mb="30px">Retours et Remboursements</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Nous contacter
          </Typography>
          <Typography mb="30px">Lyon 69000</Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: E-commerce@gmail.com
          </Typography>
          <Typography mb="30px">06 01 02 03 04</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
