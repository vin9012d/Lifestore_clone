import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping ,faUser} from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
export default function Signout() {
    const { state, handleLogout } = useContext(AuthContext);
    return (
        <Box>
            <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} >
      <FontAwesomeIcon icon={faUser} size="xl"   />
      </MenuButton>
      <MenuList>
                            <MenuItem onClick={() => {
                                handleLogout();
                                
        }} color="orange">Logout</MenuItem>
      
      </MenuList>
    </>
  )}
</Menu>
        </Box>
    )
}