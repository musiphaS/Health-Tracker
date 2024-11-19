import { Box, Image, Select, Circle } from "@chakra-ui/react";

function Profile() {
  return (
    <Box className="profile" display="flex" alignItems="center">
      <Box className="image" position="relative">
        <Image
          src="https://randomuser.me/api/portraits/men/75.jpg"
          boxSize="40px"
          borderRadius="50%"
          alt="Profile"
        />
        <Circle
          size="12px"
          bg="red.300"
          position="absolute"
          top="0"
          right="0"
          className="notification"
          boxShadow="0 0 8px 4px rgba(255, 0, 0, 0.6)"
        />
      </Box>

      <Select placeholder="Select Name" defaultValue="Kelvin Musipha" ml={4} border={"none"}>
        <option value="Kelvin Musipha">Kelvin Musipha</option>
      </Select>
    </Box>
  );
}

export default Profile;