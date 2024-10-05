import { Box, Icon, Text, IconProps } from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";

interface MobileNavBarLinkProps {
  href: string;
  label: string;
  icon: React.ElementType<IconProps>; // Update type to correctly accept icon components
  onClose: () => void;
}

const MobileNavBarLink: React.FC<MobileNavBarLinkProps> = memo(
  ({ href, label, icon, onClose }) => {
    return (
      <Link href={href} passHref>
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          w="full"
          p={3}
          borderRadius="md"
          _hover={{ bg: "purple.600" }}
          onClick={onClose}
        >
          <Icon as={icon} />
          <Text ml={3}>{label}</Text>
        </Box>
      </Link>
    );
  }
);

MobileNavBarLink.displayName = "MobileNavBarLink";

export default MobileNavBarLink;
