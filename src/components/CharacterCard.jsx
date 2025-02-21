import { Box, Image, Text, Heading } from "@chakra-ui/react";


const CharacterCard = ({ character }) => {
  return (
  
    <Box
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="md"
    overflow="hidden"
    p={4}
    textAlign="center"
    transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    _hover={{
      boxShadow: "2xl",
      transform: "scale(1.05)",
      cursor: "pointer",
      bg: "gray.900",
      color: "white",
      }}
    >
      <Image src={character.image} alt={character.name} borderRadius="1000px "width={"150px"} marginLeft={"70px"} />
      <Heading size="md" mt={2}>{character.name}</Heading>
      <Text fontSize="sm" color="gray.500">
      Species:{character.species} 
      </Text>
      <Text fontSize="sm" color="gray.500">
      Status:{character.status}
      </Text>
     
    </Box>
  );
};

export default CharacterCard;
