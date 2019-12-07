import React from "react";
import { Box, Text, Avatar, Badge, Icon } from "@chakra-ui/core";

type PersonCardProps = {
  avatarUrl: string;
  fullName: string;
  jobTitle: string;
  currentSkill: string;
  key?: string;
};

export const PersonCard = ({
  avatarUrl,
  fullName,
  jobTitle,
  currentSkill,
  ...props
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
      style={{ willChange: "transform" }}
      {...props}
    >
      <Avatar src={avatarUrl} name={fullName} size="lg" />
      <Box ml={4} flexGrow={1}>
        <Text
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
        >
          {fullName}
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
      <Box alignSelf="flex-start" className="drag-handle" cursor="grab">
        <Icon
          name="drag-handle"
          style={{ backfaceVisibility: "visible" }}
        ></Icon>
      </Box>
    </Box>
  );
};
