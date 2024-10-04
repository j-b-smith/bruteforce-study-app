import { VStack } from "@chakra-ui/react";
import MobileNavBarLink from "./MobileNavBarLink";
import { AtSignIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <>
    <VStack
      as="nav"
      spacing={4}
      mt={2}
      bg="purple.500"
      p={4}
      borderRadius="md"
      display={{ md: "none" }}
      onClick={onClose} // Close the menu when an item is clicked
    >
      <MobileNavBarLink href="/" label="Home" icon={AtSignIcon} onClose={onClose} />
      <MobileNavBarLink href="/quizzes" label="Quizzes" icon={InfoIcon} onClose={onClose} />
      <MobileNavBarLink href="/flashcards" label="Flashcards" icon={InfoIcon} onClose={onClose} />
      <MobileNavBarLink href="/settings" label="Settings" icon={SettingsIcon} onClose={onClose} />
    </VStack>
    </>
  );
};

export default MobileMenu;
