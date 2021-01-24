import { Box } from "@chakra-ui/core";
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";
import landing from "../../assets/images/home.jpg";

const SearchPage = (props) => {
  return (
    <Box>
      <Header bgImage={landing} vh="100vh" search>
          <Search history={props.history} />
      </Header>
    </Box>
  );
};

export default SearchPage;