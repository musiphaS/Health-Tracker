import { Box, Image, Select } from "@chakra-ui/react";

function Profile() {
  return (
    <Box className="profile" display="flex" alignItems="center">
      <Box className="image" position="relative" >
        <Image
          src="Profile Icon.jpg"
          boxSize="55px"
          borderRadius="50%"
          alt="Profile"
        />
      </Box>

      <Select placeholder="Select Name" defaultValue="Kelvin Musipha" ml={4} border={"none"}>
        <option value="Kelvin Musipha">Kelvin Musipha</option>
      </Select>
    </Box>
  );
}

export default Profile;