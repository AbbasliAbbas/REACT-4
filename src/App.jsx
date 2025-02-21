import { useEffect, useState } from "react";
import { SimpleGrid, Spinner, Text, Container } from "@chakra-ui/react";
import CharacterCard from "./components/CharacterCard";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Şəbəkə xətası");
        }
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Məlumat yüklənərkən xəta baş verdi.");
        setLoading(false);
      });
  }, []);

  return (
    <Container maxW="container.xl" py={5}>
      {loading && <Spinner size="xl" />}
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default App;
