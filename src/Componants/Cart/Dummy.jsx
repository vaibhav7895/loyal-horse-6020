
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react"
// import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <Menu isOpen={isOpen}>
          <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2, 2]}
              px={4}
              borderRadius={5}
              // _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
              aria-label="Courses"
              fontWeight="normal"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
          >
            abcd
              {/* More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
          </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
      </Menu>
  )
}
