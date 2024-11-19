// Dashboard.jsx
import React from 'react';
import { Box, Text, Image, Badge, Stack, Heading, Icon, HStack, SimpleGrid, Flex } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Droplets, HeartPulse, Plus } from 'lucide-react';
import { FiCalendar, FiChevronRight } from 'react-icons/fi';

// import Profile from './components/Profile';


const Dashboard = () => {

    return (
        <>
            {/* Sidebar */}
            <Box gridColumn="span 3" p={5} borderRadius="md" position="relative">
                <Text fontWeight="bold" fontSize="lg">My Last Visit</Text>
                <Box mt={4} bg="gray.50" borderRadius="20px" padding="6" boxShadow="md" position="relative">
                    <Icon as={ChevronRightIcon} w={8} h={8} color="blue.400" bg="white" borderRadius="full" position="absolute" top={4} right={4} />
                    <Text fontSize="sm">31/08/2023</Text>
                    <Heading size="sm">Clinic Visit</Heading>
                    <Text fontWeight="bold" fontSize="lg" color="blue.400">Neurology</Text>
                </Box>

                {/* Doctor Info */}
                <Box mt={6} bg="gray.50" borderRadius="20px" padding="6" boxShadow="md" position="relative">
                    <Stack direction="row" align="center" spacing={4}>
                        <Image boxSize="100px" width="30%" height="20%" objectFit="cover" src="African-medical-doctor-man-isolated-on-transparent-background-PNG (1).png" alt="Dr. Weber" />
                        <Box position="absolute" top="10" right="4">
                            <Text>Dr. Weber</Text>
                            <Text>Male, 34</Text>
                            <Badge colorScheme="blue" padding="2" borderRadius="full">Neurology Specialist</Badge>
                        </Box>
                    </Stack>
                </Box>

                {/* Diagnosis */}
                <Box mt={6} bg="gray.50" borderRadius="20px" padding="6" boxShadow="md" position="relative">
                    <Icon as={ChevronRightIcon} w={8} h={8} color="blue.400" bg="white" borderRadius="full" position="absolute" top={4} right={4} />
                    <Text fontWeight="bold">Last Diagnosis</Text>
                    <Text fontSize="sm">Cluster Headache</Text>
                    {/* Vital Signs */}
                    <HStack>
                        <Droplets color='red' />
                        <Text>Blood Status</Text>
                    </HStack>
                    <Text bg="white" py={1}>
                        <Text textAlign="right"><Text bg="blue.200" color="white" as="span" fontSize="xs" py="2" px="2px" borderRadius="10px">110/70</Text></Text>
                    </Text>

                    <HStack>
                        <HeartPulse color="red" />
                        <Text>Heart Rate</Text>
                    </HStack>
                    <Text bg="white" py={1}>
                        <Text textAlign="right"> <svg viewBox="0 0 200 50" className="w-full">
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
            <Box gridColumn="span 6" bg="white" p={5} borderRadius="md" display="flex" flexDirection="column" justifyContent="space-between">
                <Heading size="xl">My Health Overview</Heading>
                <Box position="relative" boxSize="70%" display="flex" justifyContent="center" alignItems="center">
                    <Image
                        objectFit="contain"
                        src="Brains.png"
                        alt="Dr. Weber"
                        width="100%"
                        height="100%"
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
                    <Heading size="md">Complaints</Heading>
                    <SimpleGrid columns={2} spacing={4} mt={6}>
                        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
                            <Heading size="sm" mb={2}>Headache</Heading>
                            <Text>Add your content here</Text>
                        </Box>

                        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
                            <Heading size="sm" mb={2}>Blury Eye</Heading>
                            <Text>Add your content here</Text>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>

            {/* Right Panel */}

            <Box gridColumn="span 3" p={5} borderRadius="md" display="flex" flexDirection="column">
                {/* <Box>
                    <Profile />
                </Box> */}
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
                            <Icon as={FiCalendar} boxSize={8} p={1} color="blue.500" bg="white" rounded="full" />
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