// Dashboard.jsx
import React from 'react';
import { Box, Text, Image, Badge, Stack, Heading, Icon, HStack, SimpleGrid, Flex, useBreakpointValue } from '@chakra-ui/react';
import { ChevronRightIcon, CalendarIcon } from '@chakra-ui/icons';
import { Droplets, HeartPulse, Plus } from 'lucide-react';
import Profile from './components/Profile';

// import Profile from './components/Profile';


const Dashboard = () => {

    const boxWidth = useBreakpointValue({
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "span 3"
      });
    
      const iconSize = useBreakpointValue({ base: 6, md: 8 });
      const padding = useBreakpointValue({ base: 3, sm: 4, md: 5 });
      const cardPadding = useBreakpointValue({ base: 4, sm: 5, md: 6 });
      const imageSize = useBreakpointValue({ base: "80px", sm: "90px", md: "100px" });

    return (
        <>
            {/* Sidebar */}
            <Box gridColumn={boxWidth} p={padding} borderRadius="md" position="relative" width="100%">
                <Text fontWeight="bold" fontSize={{ base: "md", sm: "lg" }} mb={{ base: 2, md: 4 }}>My Last Visit</Text>
                <Box mt={4} bg="gray.50" borderRadius="20px" padding={cardPadding} boxShadow="md" position="relative">
                    <Icon as={ChevronRightIcon} w={8} h={8} color="blue.400" bg="white" borderRadius="full" position="absolute" top={4} right={4} />
                    <Text fontSize={{ base: "xs", sm: "sm" }}>31/08/2023</Text>
                    <Heading size={{ base: "xs", sm: "sm" }}>Clinic Visit</Heading>
                    <Text fontWeight="bold"   fontSize={{ base: "md", sm: "lg" }} color="blue.400">Neurology</Text>
                </Box>

                {/* Doctor Info */}
                <Box mt={6} bg="gray.50" borderRadius="20px" padding="6" boxShadow="md" position="relative">
                    <Stack  direction={{ base: "column", sm: "row" }} align={{ base: "flex-start", sm: "center" }} spacing={{ base: 3, md: 4 }} position="relative">
                        <Image boxSize={imageSize} width={{ base: "40%", sm: "30%" }} height="auto" objectFit="cover" src="African-medical-doctor-man-isolated-on-transparent-background-PNG (1).png" alt="Dr. Weber" />
                        <Box   position={{ base: "relative", sm: "absolute" }} top={{ sm: "10" }} right={{ sm: "4" }} mt={{ base: 2, sm: 0 }}>
                            <Text fontSize={{ base: "sm", md: "md" }}>Dr. Weber</Text>
                            <Text fontSize={{ base: "sm", md: "md" }}>Male, 34</Text>
                            <Badge colorScheme="blue"  padding={{ base: 1, md: 2 }} borderRadius="full" fontSize={{ base: "xs", md: "sm" }} >Neurology Specialist</Badge>
                        </Box>
                    </Stack>
                </Box>

                {/* Diagnosis */}
                <Box mt={6} bg="gray.50" borderRadius="20px" padding={cardPadding} boxShadow="md" position="relative">
                    <Icon as={ChevronRightIcon} w={iconSize} h={iconSize} color="blue.400" bg="white" borderRadius="full" position="absolute" top={4} right={4} />
                    <Text fontWeight="bold" mb={2}>Last Diagnosis</Text>
                    <Text fontSize={{ base: "sm", md: "md" }} mb={4}>Cluster Headache</Text>
                    {/* Vital Signs */}
                    <HStack mb={2}>
                    <Droplets color="red" size={useBreakpointValue({ base: 16, md: 20 })} />
                        <Text fontSize={{ base: "sm", md: "md" }}>Blood Status</Text>
                    </HStack>
                    <Text bg="white" py={1}>
                        <Text textAlign="right"><Text bg="blue.200" color="white" as="span" fontSize="xs" py="2" px="2px" borderRadius="10px">110/70</Text></Text>
                    </Text>

                    <HStack>
                    <HeartPulse color="red" size={useBreakpointValue({ base: 16, md: 20 })} />
                        <Text fontSize={{ base: "sm", md: "md" }}>Heart Rate</Text>
                    </HStack>
                    <Text bg="white" py={1}>
                        <Text textAlign="right"> 
                            <svg viewBox="0 0 200 50" className="w-full">
                            <path
                                d="M0,25 Q25,0 50,25 T100,25 T150,30 T200,20"
                                fill="none"
                                stroke="rgb(59, 130, 246)"
                                strokeWidth="3"
                            />
                        </svg> <Text bg="blue.200" color="white" as="span" fontSize="xs" py="2" px="2px" borderRadius="10px">110/70</Text></Text>
                    </Text>
                    <span> Heart Rate: </span>
                    <span> 120 bpm </span>
                </Box>
            </Box>

            {/* Overview Section */}
            <Box gridColumn={{ base: "span 12", md: "span 6" }} bg="white" p={padding} borderRadius="md" display="flex" flexDirection="column" justifyContent="space-between">
                <Heading size={{ base: "lg", md: "xl" }} mb={4} >My Health Overview</Heading>
                <Box position="relative" boxSize="70%" display="flex" justifyContent="center" alignItems="center">
                    <Image
                        objectFit="contain"
                        src="Brains.png"
                        alt="Dr. Weber"
                        width="100%"
                        height="100%"
                        maxW="400px"
                    />
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                    >
                        {/* Top Left */}
                        <Badge
                            position="absolute"
                            top="20"
                            left="20"
                            color="black"
                            fontSize={{ base: "xs", md: "sm" }}
                            sx={{
                                bgGradient: 'linear(to-r, blue.400, white)',
                                color: 'black',
                                padding: '2px 8px',
                                borderRadius: 'lg',
                            }}
                        >
                            Headaches
                        </Badge>

                        {/* Top Right */}
                        <Badge
                            position="absolute"
                            top="14"
                            right="25"
                            color="black"
                            fontSize={{ base: "xs", md: "sm" }}
                            sx={{
                                bgGradient: 'linear(to-r, blue.400, white)',
                                color: 'black',
                                padding: '2px 8px',
                                borderRadius: 'lg',
                            }}
                        >
                            Scalp Issues
                        </Badge>

                        {/* Bottom Left */}
                        <Badge
                            position="absolute"
                            bottom="20"
                            left="0"
                            color="black"
                            fontSize={{ base: "xs", md: "sm" }}
                            sx={{
                                bgGradient: 'linear(to-r, blue.400, white)',
                                color: 'black',
                                padding: '2px 8px',
                                borderRadius: 'lg',
                            }}
                        >
                            Shoulder Bursitis
                        </Badge>

                        {/* Bottom Right */}
                        <Badge
                            position="absolute"
                            bottom="40"
                            right="-5"
                            color="black"
                            fontSize={{ base: "xs", md: "sm" }}
                            sx={{
                                bgGradient: 'linear(to-r, blue.400, white)',
                                color: 'black',
                                padding: '2px 8px',
                                borderRadius: 'lg',
                            }}
                        >
                            Cervical Spondylosis
                        </Badge>
                    </Box>
                </Box>

                <Box mt="6">
                    <Heading size="md" mb={4}>Complaints</Heading>
                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                        <Box bg="gray.100" p={cardPadding} borderRadius="md" boxShadow="sm" textAlign="center">
                            <Heading size="sm" mb={2}>Headache</Heading>
                            <Text>Headache is a problem</Text>
                        </Box>

                        <Box bg="gray.100" p={cardPadding} borderRadius="md" boxShadow="sm" textAlign="center">
                            <Heading size="sm" mb={2}>Blury Eye</Heading>
                            <Text fontSize="sm">Eyes hurt a lot</Text>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>

            {/* Right Panel */}

            <Box gridColumn="span 3" p={5} borderRadius="md" display="flex" flexDirection="column">
                {/* <Box>
                    <Profile />
                </Box> */}
                      <Profile/>
                <Box mt={4} borderRadius="lg" py="10" position="relative">
                    <Flex justifyContent="space-between" alignItems="center" mb={4}>
                        <Text fontWeight="bold" fontSize="lg">Treatment</Text>
                        <Icon as={ChevronRightIcon} w={8} h={8} color="blue.400" bg="gray.100" borderRadius="full" />
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Text fontWeight="medium" color="blue.300" bg="gray.100" rounded="full" px="6" py="1">
                            Nasal Spray
                        </Text>
                        <Text fontWeight="medium" color="blue.300" bg="gray.100" rounded="full" px="6" py="1">
                            Injection
                        </Text>
                    </Flex>

                    <Flex justifyContent="flex-start" alignItems="center" gap={4}>
                        <Text fontWeight="medium" mt={4} color="blue.300" bg="gray.100" rounded="full" px="6" py="1">
                            Electrical Pulses
                        </Text>

                        <Icon
                            as={Plus}
                            boxSize={8}
                            bg="blue.400"
                            p={1}
                            color="white"
                            borderRadius="full"
                            cursor="pointer"
                            _hover={{ bg: "blue.200" }} // Change background on hover
                            transition="background-color 0.2s ease-in-out"
                            position="relative"
                            top={2}
                        />
                    </Flex>

                </Box>
                <Text fontWeight="bold" fontSize="lg">Checkup Schedule</Text>
                <Stack mt={6} bg="gray.100" p="6" borderRadius="20px" boxShadow="sm">
                    <Flex align="center" justify="space-evenly" bg="gray.100" borderRadius="md">
                        {/* Calendar Icon and Text */}
                        <Flex align="center" gap={2}>
                            <CalendarIcon boxSize={8} p={1} color="blue.500" bg="white"/>
                            <Text fontSize="sm">
                                Next Checkup: <br />
                                <span style={{ fontWeight: 'bold' }}>Thurs, 31 Aug 2023</span>
                            </Text>
                        </Flex>

                        {/* Right Arrow Icon */}
                        <Icon as={ChevronRightIcon} w={8} h={8} color="blue.400" bg="white" borderRadius="full" />
                    </Flex>
                    <Text>Clinic Visit Appointment
                        <Flex align="center" mt={2}>
                            <Image boxSize="50px" // Adjust size here
                                borderRadius="full"
                                objectFit="contain"
                                src="image1.png"
                                alt="Dr. Weber"
                                mr={4} /> <Box>
                                <Text fontWeight="bold" fontSize="sm" color="gray.500">
                                  Neurologist
                                </Text>
                                <Text fontSize="md" fontWeight="medium">
                                  Dr. Kevin
                                </Text>
                              </Box>
                        </Flex>

                    </Text>
                    <Text>Video Consultant Chat <br /> <Flex align="center" mt={2}>
                            <Image boxSize="50px" // Adjust size here
                                borderRadius="full"
                                objectFit="contain"
                                src="image2.png"
                                alt="Dr. Weber"
                                mr={4} /> <Box>
                                <Text fontWeight="bold" fontSize="sm" color="gray.500">
                                  Neurologist
                                </Text>
                                <Text fontSize="md" fontWeight="medium">
                                  Dr. Kevin
                                </Text>
                              </Box>
                        </Flex>
                        </Text>
                </Stack>


                <Box mt={6}>
                    <Text fontWeight="bold">My Medicine</Text>
                    <Stack direction="row" spacing={2}>
                        <Box>
                            <Image src="medication_image.jpg" boxSize="50px" />
                            <Text>Verapamil</Text>
                        </Box>
                        <Box>
                            <Image src="medication_image2.jpg" boxSize="50px" />
                            <Text>Prednisone</Text>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default Dashboard;