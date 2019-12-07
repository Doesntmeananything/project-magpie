import React from "react";
import { Box, Text, Avatar, Badge } from "@chakra-ui/core";

type PersonCardProps = {
  avatarUrl: string;
  name: string;
  jobTitle: string;
  currentSkill: string;
};

export const PersonCard = ({
  avatarUrl,
  name,
  jobTitle,
  currentSkill
}: PersonCardProps) => {
  return (
    <Box
      p={2}
      display="flex"
      width="xs"
      alignItems="center"
      rounded="lg"
      bg="purple.50"
      shadow="md"
    >
      <Avatar src={avatarUrl} name={name} size="lg" />
      <Box ml={4}>
        <Text
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
        >
          {name}
        </Text>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          {jobTitle}
        </Text>
        <Text color="gray.600">Levelling up in</Text>
        <Badge variantColor="green">{currentSkill}</Badge>
      </Box>
    </Box>
  );
};
