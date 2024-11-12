// Dashboard.jsx
import React from 'react';
import { Box, Text, Image, Badge, Stack, Heading, Icon, HStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Droplets, HeartPulse } from 'lucide-react'

const Dashboard = () => {
    return (
        <>
            {/* Sidebar */}
            <Box gridColumn="span 3" p={5} borderRadius="md">
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
                    <HeartPulse color="red"/> 
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
            <Box gridColumn="span 6" bg="white" p={5} borderRadius="md">
                <Heading size="xl">My Health Overview</Heading>
                <Image src="/health-dashboard/src/images/African-medical-doctor-man-isolated-on-transparent-background-PNG.png" alt="Brain Visualization" borderRadius="md" />
                {/* Health Conditions */}
                <Stack mt={4} spacing={3}>
                    <Badge colorScheme="blue">Trigeminal Autonomic Chapalgias</Badge>
                    <Badge colorScheme="blue">Posterior Hypothalamus Activation</Badge>
                    <Badge colorScheme="blue">Trigeminal Autonomic Reflex</Badge>
                    <Badge colorScheme="blue">Trigeminovascular System Activation</Badge>
                </Stack>
            </Box>

            {/* Right Panel */}
            <Box gridColumn="span 3" p={5} borderRadius="md" display="flex" flexDirection="column">
                <Box mt={4} bg="gray.50" borderRadius="lg" padding="6" boxShadow="md" position="relative">
                    <Text fontWeight="bold" fontSize="lg">Treatment</Text>
                    <Icon as={ChevronRightIcon} w={8} h={8} color="blue.400" bg="white" borderRadius="full" position="absolute" top={4} right={4} />
                </Box>
                <Text fontWeight="bold" fontSize="lg">Checkup Schedule</Text>
                <Stack mt={6}>
                    <Text>Next Checkup: Thurs, 31 Aug 2023</Text>
                    <Text>Clinic Visit: Dr. Kelvin musipha (Neurologist)</Text>
                    <Text>Video Chat: Dr. Kelly Carl (Psychiatrist)</Text>
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
