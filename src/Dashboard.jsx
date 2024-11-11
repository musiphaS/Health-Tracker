// Dashboard.jsx
import React from 'react';
import { Box, Text, Image, Badge, Stack, Heading } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <>
      {/* Sidebar */}
      <Box gridColumn="span 3" p={5} borderRadius="md">
        <Box mt={4} bg="gray.50">
        <Text fontSize="sm">31/08/2023</Text>
        <Text fontWeight="bold" fontSize="lg">My Last Visit</Text>
          <Heading size="sm">Clinic Visit</Heading>
          <Text fontWeight="bold" fontSize="lg" color="blue.400">Neurology</Text>
          </Box>

          {/* Doctor Info */}
          <Box mt={6} bg="gray.50">
            <Image borderRadius="full" boxSize="50px" src="doctor_image.jpg" alt="Dr. Weber" />
            <Text>Dr. Weber</Text>
            <Text>Male, 34</Text>
            <Badge colorScheme="blue">Neurology Specialist</Badge>
          </Box>

          {/* Diagnosis */}
          <Box mt={6} bg="gray.50">
            <Text fontWeight="bold">Last Diagnosis</Text>
            <Text>Cluster Headache</Text>
          {/* Vital Signs */}
            <Text>Blood Status: 110/70</Text>
            <Text>Heart Rate: 120 bpm</Text>
          </Box>
      </Box>

      {/* Overview Section */}
      <Box gridColumn="span 6" bg="white" p={5} borderRadius="md">
        <Heading size="md">My Health Overview</Heading>
        <Image src="brain_image.jpg" alt="Brain Visualization" borderRadius="md" />
        {/* Health Conditions */}
        <Stack mt={4} spacing={3}>
          <Badge colorScheme="blue">Trigeminal Autonomic Chapalgias</Badge>
          <Badge colorScheme="blue">Posterior Hypothalamus Activation</Badge>
          <Badge colorScheme="blue">Trigeminal Autonomic Reflex</Badge>
          <Badge colorScheme="blue">Trigeminovascular System Activation</Badge>
        </Stack>
      </Box>

      {/* Right Panel */}
      <Box gridColumn="span 3" bg="gray.50" p={5} borderRadius="md">
        <Text fontWeight="bold" fontSize="lg">Checkup Scheduling</Text>
        <Stack mt={4}>
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
